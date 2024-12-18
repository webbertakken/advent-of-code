import Library from './lib'

export type Direction = { x: number; y: number }
export type Position = { x: number; y: number }

// Cardinal directions in order: Up, Right, Down, Left
export const directions: Direction[] = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
] as const

const possibleTiles = ['.', '#', 'S', 'E', ' '] as const

type Tile = (typeof possibleTiles)[number]

interface Node extends Position {
  value: Tile
  cameFrom?: Node
  couldHaveComeFrom: Set<Node>
  cost?: number
}

const getInput = () =>
  Library.getInput('day16')
    .split('\n')
    .map((line) => line.split('')) as Tile[][]

const getMatrix = (): [Node[][], Node, Node] => {
  const layout = getInput()

  const nodeLayout: Node[][] = []
  let start: Node = { x: 0, y: 0, value: 'S', couldHaveComeFrom: new Set() }
  let goal: Node = { x: 0, y: 0, value: 'E', couldHaveComeFrom: new Set() }
  for (const [y, row] of layout.entries()) {
    nodeLayout[y] = []
    for (const [x, value] of row.entries()) {
      nodeLayout[y][x] = { x, y, value, couldHaveComeFrom: new Set() }
      if (value === 'S') start = nodeLayout[y][x]
      if (value === 'E') goal = nodeLayout[y][x]
    }
  }

  return [nodeLayout, start, goal]
}

const getCost = (current: Node, next: Node): number => {
  const prev = current.cameFrom

  // If there is no previous node, we are at the start, facing east
  if (!prev) {
    if (next.x === current.x - 1) return 2001
    if (next.y !== current.y) return 1001
    return 1
  }

  // Turning from directions
  const dir1 = directions.findIndex((dir) => dir.x === prev.x - current.x && dir.y === prev.y - current.y)
  const dir2 = directions.findIndex((dir) => dir.x === current.x - next.x && dir.y === current.y - next.y)

  // Angles: 0 = 0°, 1 = 90°, 2 = 180°, 3 = 270°
  const angle = (dir1 - dir2 + 4) % 4
  if (angle === 0) return 1
  if (angle === 1) return 1001
  if (angle === 2) return 2001
  if (angle === 3) return 1001

  throw new Error('Invalid angle')
}

function depthFirstSearch(matrix: Node[][], start: Node, goal: Node, producePath = false) {
  const getNeighbours = (node: Node): [Node, number][] => {
    const neighbours: [Node, number][] = []
    for (const direction of directions) {
      const next = matrix[node.y + direction.y]?.[node.x + direction.x]
      if (!next) throw new Error('Out of bounds')
      if (next.value === '#') continue
      neighbours.push([next, getCost(node, next)])
    }
    return neighbours
  }

  let bestCost = Infinity
  let bestPath: Node[] = []

  // Depth first search
  const walk = (current: Node, pathSoFar: Node[] = []) => {
    const path: Node[] = producePath ? [current, ...pathSoFar] : []
    if (current === goal) {
      if (current.cost && current.cost < bestCost) {
        bestCost = current.cost
        if (producePath) bestPath = path
      }
      return
    }

    const neighbours = getNeighbours(current)
    for (const [neighbour, cost] of neighbours) {
      const pathToNeighbourCost = (current.cost ?? 0) + cost
      if (neighbour.cost === undefined || pathToNeighbourCost < neighbour.cost) {
        neighbour.cost = pathToNeighbourCost
        neighbour.cameFrom = current
        walk(neighbour, path)
      }
    }
  }

  walk(start)

  return { bestCost, bestPath }
}

// Part 1
export const part1 = () => depthFirstSearch(...getMatrix()).bestCost
console.log('Part 1:', part1())

// Part 2
export const part2 = () => {
  const [matrix, start, goal] = getMatrix()
  const { bestCost: initialBestCost, bestPath: initialBestPath } = depthFirstSearch(matrix, start, goal, true)

  const markedTiles = new Set<string>()
  initialBestPath.forEach(({ x, y }) => markedTiles.add(`${x},${y}`))

  for (const [index, node] of initialBestPath.entries()) {
    // console.log(`Iteration ${index}. Replacing path node ${node.x},${node.y} with a wall.`)
    const [matrixCopy, start, goal] = getMatrix()
    matrixCopy[node.y][node.x].value = '#'
    const { bestCost, bestPath } = depthFirstSearch(matrixCopy, start, goal, true)
    if (bestCost === initialBestCost) bestPath.forEach(({ x, y }) => markedTiles.add(`${x},${y}`))
  }

  return markedTiles.size
}
console.log('Amount of nodes marked:', 465)
