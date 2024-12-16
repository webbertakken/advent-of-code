// export type Node = string
export type Edge = [Node, number] // (neighbor, cost)

export const possibleTiles = ['.', '#', 'S', 'E', ' '] as const

export type Tile = (typeof possibleTiles)[number]

export type Position = { x: number; y: number }
export interface Node extends Position {
  value: Tile
}

// neighbors function: given a node, returns its immediate neighbors and their costs.
export type NeighboursFn = (node: Node, prev?: Node) => ReadonlyArray<Edge>

export const dijkstra = (neighbors: NeighboursFn): ((start: Node) => Map<Node, number>) => {
  // Returns a function that, when given a start node, computes shortest paths
  return (start: Node) => {
    // Add a predecessor map
    const predecessors = new Map<Node, Node | undefined>()
    predecessors.set(start, undefined) // start node has no predecessor

    // Recursive helper function
    function step(
      dist: Map<Node, number>,
      visited: Set<Node>,
      frontier: ReadonlyArray<[Node, number]>, // priority queue: node and current dist
    ): Map<Node, number> {
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
      const previousNode = predecessors.get(currentNode)
      if (previousNode && previousNode.x === currentNode.x && previousNode.y === currentNode.y) {
        throw new Error('incorrect previous node')
      }

      // Update distances and frontier for neighbors
      const updated = neighbors(currentNode, previousNode).reduce(
        ([d, f], [nbr, cost]) => {
          const oldDist = d.get(nbr)
          const newDist = currentDist + cost
          if (oldDist === undefined || newDist < oldDist) {
            const newD = new Map(d).set(nbr, newDist)
            const newF = [...f, [nbr, newDist]] as [Node, number][]

            predecessors.set(nbr, currentNode)

            return [newD, newF]
          }
          return [d, f]
        },
        [dist, remainingFrontier] as [Map<Node, number>, [Node, number][]],
      )

      // // Mark current as visited
      // const newVisited = new Set(visited).add(currentNode)

      // // Create mutable copies of dist and remainingFrontier
      // const updatedDist = new Map(dist)
      // const updatedFrontier = [...remainingFrontier]
      //
      // // Update distances and frontier for neighbors
      // for (const [nbr, cost] of neighbors(currentNode, previousNode)) {
      //   const oldDist = updatedDist.get(nbr)
      //   const newDist = currentDist + cost
      //
      //   if (oldDist === undefined || newDist < oldDist) {
      //     updatedDist.set(nbr, newDist)
      //     updatedFrontier.push([nbr, newDist])
      //
      //     // Record the predecessor for nbr
      //     predecessors.set(nbr, currentNode)
      //   }
      // }

      // Return updated result as a tuple
      // const updated: [Map<Node, number>, [Node, number][]] = [updatedDist, updatedFrontier]

      return step(updated[0], newVisited, updated[1])
    }

    // Initial distance map: start node with dist 0
    const initialDist = new Map<Node, number>([[start, 0]])
    const initialVisited = new Set<Node>()
    const initialFrontier: [Node, number][] = [[start, 0]]

    return step(initialDist, initialVisited, initialFrontier)
  }
}
