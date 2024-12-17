export type Direction = { x: number; y: number }
export type Position = { x: number; y: number }

// Cardinal directions in order: Up, Right, Down, Left
export const directions: Direction[] = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
] as const

/**
 * Based on the A* algorithm, finds the fastest path from start to goal.
 * Weighted by the cost of moving from one position to another.
 */
export const aStar = <T extends Position>(
  layout: T[][],
  start: T,
  goal: T,
  getCost: (prev: T, current: T, next: T) => number,
  heuristic: (current: T, goal: T) => number,
): [T, number][] | null => {
  const openSet = new Set<T>([start])
  const cameFrom = new Map<T, [T, number]>()

  const gScore = new Map<T, number>().set(start, 0)
  const fScore = new Map<T, number>().set(start, heuristic(start, goal))

  const getNodeWithLowestFScore = (): T => {
    let bestNode: T | null = null
    let lowest = Infinity

    for (const node of openSet) {
      const score = fScore.get(node)
      if (score !== undefined && score < lowest) {
        lowest = score
        bestNode = node
      }
    }

    return bestNode as T
  }

  const reconstructPath = (current: T): [T, number][] => {
    console.log('Reconstructing path')
    const path: [T, number][] = [[current, 0]]

    let totalCost = 0
    let cost = 0
    let node = current

    while (cameFrom.has(node)) {
      ;[node, cost] = cameFrom.get(node) as [T, number]
      totalCost += cost
      path.unshift([node, cost])
    }

    return path
  }

  while (openSet.size > 0) {
    const current = getNodeWithLowestFScore()
    if (current.x === goal.x && current.y === goal.y) return reconstructPath(current)

    // Explore neighbours of current
    openSet.delete(current)
    for (const direction of directions) {
      const next = layout[current.y + direction.y]?.[current.x + direction.x]
      if (!next) continue
      const [prev] = cameFrom.get(current)! || []

      const cost = getCost(prev, current, next)
      const tentativeGScore = (gScore.get(current) ?? Infinity) + cost
      if (tentativeGScore < (gScore.get(next) ?? Infinity)) {
        cameFrom.set(next, [current, cost])

        gScore.set(next, tentativeGScore)
        fScore.set(next, tentativeGScore + heuristic(next, goal))
        openSet.add(next)
      }
    }
  }

  return null
}
