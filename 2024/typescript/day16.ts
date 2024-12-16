import Library from './lib'
import { findBestPath, directions, Position } from './lib/findBestPath'

const possibleTiles = ['.', '#', 'S', 'E', ' '] as const

type Tile = (typeof possibleTiles)[number]

interface Node extends Position {
  value: Tile
}

const manhattanHeuristic = (current: Node, goal: Node): number => {
  return Math.abs(current.x - goal.x) + Math.abs(current.y - goal.y)
}

const getCost = (prev: Node, current: Node, next: Node): number => {
  if (next.value === '#') return Infinity
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

const getInput = () =>
  Library.getInput('day16')
    .split('\n')
    .map((line) => line.split('')) as Tile[][]

// Part 1
export const part1 = () => {
  const layout = getInput()

  const nodeLayout: Node[][] = []
  let start: Node = { x: 0, y: 0, value: 'S' }
  let goal: Node = { x: 0, y: 0, value: 'E' }
  for (const [y, row] of layout.entries()) {
    nodeLayout[y] = []
    for (const [x, value] of row.entries()) {
      if (value === 'S') start = { x, y, value }
      if (value === 'E') goal = { x, y, value }
      nodeLayout[y][x] = { x, y, value }
    }
  }

  const result = findBestPath(nodeLayout, start, goal, getCost, manhattanHeuristic)!

  // Visualize the path
  for (const [node] of result) layout[node.y][node.x] = ' '
  layout.map((line) => console.log(line.join('')))

  return result?.map(([_, cost]) => cost).sum()
}
console.log('Part 1:', part1()) // 85440 too high

// Part 2
export const part2 = () => {
  getInput()

  return 0
}
// console.log("Part 2:", part2());
