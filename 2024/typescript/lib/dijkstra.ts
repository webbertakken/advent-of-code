export type Edge = [Node, number] // (neighbor, cost)
export type Direction = { x: number; y: number }

export const possibleTiles = ['.', '#', 'S', 'E', ' '] as const

export type Tile = (typeof possibleTiles)[number]

export type Position = { x: number; y: number }
export interface Node extends Position {
  value: Tile
}

// Cardinal directions in order: Up, Right, Down, Left
export const directions: Direction[] = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
] as const

// neighbors function: given a node, returns its immediate neighbors and their costs.
export type NeighboursFn = (node: Node, prev?: Node) => ReadonlyArray<Edge>

export const dijkstra = (getNeighbours: NeighboursFn): ((start: Node) => Map<Node, { cost: number; path: Node[] }>) => {
  // Returns a function that, when given a start node, computes shortest paths
  return (start: Node) => {
    // Add a predecessor map
    const predecessors = new Map<Node, [Node, number] | undefined>()
    predecessors.set(start, undefined) // start node has no predecessor

    // Recursive helper function
    function step(
      dist: Map<Node, { cost: number; path: Node[] }>,
      visited: Set<Node>,
      frontier: ReadonlyArray<[Node, number]>, // priority queue: node and current dist
    ): Map<Node, { cost: number; path: Node[] }> {
      if (frontier.length === 0) {
        return dist
      }

      // Sort frontier by distance to get the closest unvisited node
      const sortedFrontier = [...frontier].sort((a, b) => a[1] - b[1])
      const [currentNode, currentDist] = sortedFrontier[0]
      const remainingFrontier = sortedFrontier.slice(1)

      // If we have already visited this node, continue
      if (visited.has(currentNode)) {
        return step(dist, visited, remainingFrontier)
      }

      // Mark current as visited
      const newVisited = new Set(visited).add(currentNode)

      // Retrieve the predecessor for the current node
      const [previousNode] = predecessors.get(currentNode) || []
      if (previousNode && previousNode.x === currentNode.x && previousNode.y === currentNode.y) {
        throw new Error('incorrect previous node')
      }

      // Create mutable copies of dist and remainingFrontier
      const updatedDist = new Map(dist)
      const updatedFrontier = [...remainingFrontier]

      // Update distances and frontier for neighbors
      for (const [neighbour, cost] of getNeighbours(currentNode, previousNode)) {
        const oldDist = updatedDist.get(neighbour)?.cost
        const newDist = currentDist + cost

        if (oldDist === undefined || newDist < oldDist) {
          const newPath = (updatedDist.get(currentNode)?.path || []).concat(currentNode)
          updatedDist.set(neighbour, { cost: newDist, path: newPath })
          updatedFrontier.push([neighbour, newDist])

          // Record the predecessor for nbr
          predecessors.set(neighbour, [currentNode, cost])
        }
      }

      return step(updatedDist, newVisited, updatedFrontier)
    }

    // Initial distance map: start node with dist 0
    const initialDist = new Map<Node, { cost: number; path: Node[] }>([[start, { cost: 0, path: [] }]])
    const initialVisited = new Set<Node>()
    const initialFrontier: [Node, number][] = [[start, 0]]

    return [step(initialDist, initialVisited, initialFrontier), predecessors]
  }
}
