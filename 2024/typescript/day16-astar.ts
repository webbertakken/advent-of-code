import Library from './lib'
import { aStar, directions, manhattanHeuristic, Position } from './lib/aStar'

const possibleTiles = ['.', '#', 'S', 'E', ' '] as const

type Tile = (typeof possibleTiles)[number]

export interface Node extends Position {
  value: Tile
}

const getInput = () =>
  Library.getInput('day16-example4')
    .split('\n')
    .map((line) => line.split('')) as Tile[][]

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

// Part 1
export const part1 = () => {
  const layout = getInput()

  const nodeLayout: Node[][] = []
  let start: Node = { x: 0, y: 0, value: 'S' }
  let goal: Node = { x: 0, y: 0, value: 'E' }
  for (const [y, row] of layout.entries()) {
    nodeLayout[y] = []
    for (const [x, value] of row.entries()) {
      nodeLayout[y][x] = { x, y, value }
      if (value === 'S') start = nodeLayout[y][x]
      if (value === 'E') goal = nodeLayout[y][x]
    }
  }

  const result = aStar(nodeLayout, start, goal, getCost, manhattanHeuristic)!

  for (const [y, row] of layout.entries()) {
    for (const [x, value] of row.entries()) {
      if (value === 'S' || value === 'E') layout[y][x] = value
    }
  }

  // Visualize the path and show sum
  let sum = -1
  for (const [node] of result) {
    layout[node.y][node.x] = ` `
    sum += 1
  }

  let sum2 = -1
  for (let i = 0, j = 1; j < result.length; i++, j++) {
    console.log(result[i][0].x, result[i][0].y, result[i][1])
    sum2 += result[i][1]
  }

  layout.map((line) => console.log(line.join('')))
  console.log('Sum2:', sum2)
  console.log('Steps:', sum)
  const score = result?.map(([_, cost]) => cost).sum()

  console.log('Corners', (score - sum) / 1000)

  return score
}
console.log('Part 1:', part1()) // aStar = 85440 too high // dijkstra = 84424 wrong

// Part 2
export const part2 = () => {
  getInput()

  return 0
}
