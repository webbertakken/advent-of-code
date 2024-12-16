import Library from './lib'
import { aStar, directions, Position } from './lib/aStar'

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
      nodeLayout[y][x] = { x, y, value }
      if (value === 'S') start = nodeLayout[y][x]
      if (value === 'E') goal = nodeLayout[y][x]
    }
  }

  const results = aStar(nodeLayout, start, goal, getCost, manhattanHeuristic)!

  let result
  for (result of results) {
    // Visualize the path
    for (const [node] of result) {
      layout[node.y][node.x] = ' '
    }

    layout.map((line) => console.log(line.join('')))
  }

  console.log('Possible ways:', results.length)
  return results?.[0]?.map(([_, cost]) => cost).sum()
}
console.log('Part 1:', part1()) // aStar = 85440 too high // dijkstra = 84424 wrong

// Part 2
export const part2 = () => {
  getInput()

  return 0
}
// console.log("Part 2:", part2());

// const getDijkstraNeighbours: NeighboursFn = (node: Node, prev?: Node) => {
//   const neighbours: Edge[] = []
//
//   if (prev && prev.x === node.x && prev.y === node.y) throw new Error('incorrect previous node')
//
//   console.log('looking at neighbours of', node.x, node.y)
//   for (const direction of directions) {
//     const x = node.x + direction.x
//     const y = node.y + direction.y
//
//     console.log('checking', x, y, layout[y][x])
//
//     if (x < 0 || y < 0 || x >= layout[0].length || y >= layout.length) {
//       console.log('Out of bounds at', x, y)
//       continue
//     }
//
//     if (layout[y][x] === '#') {
//       console.log('Wall at', x, y)
//       continue
//     }
//     let cost = 1
//
//     if (!prev) {
//       if (direction.x === 1) cost = 1
//       if (direction.x === -1) cost = 2001
//       if (direction.y === -1) cost = 1001
//       if (direction.y === 1) cost = 1001
//       console.log('No prev', direction.x, direction.y, 'cost:', cost)
//     } else {
//       const dir1 = directions.findIndex((dir) => dir.x === prev.x - node.x && dir.y === prev.y - node.y)
//       const dir2 = directions.indexOf(direction)
//
//       // Angles: 0 = 0°, 1 = 90°, 2 = 180°, 3 = 270°
//       const angle = (dir1 - dir2 + 2) % 4
//
//       console.log(
//         'direction from',
//         prev.x,
//         prev.y,
//         'to',
//         node.x + direction.x,
//         node.y + direction.y,
//         'is',
//         dir1,
//         dir2,
//         angle,
//       )
//
//       // if ()
//
//       if (angle === 0) cost = 1
//       if (angle === 1) cost = 1001
//       if (angle === 2) {
//         // console.log('not allowed to turn 180°')
//         continue
//       }
//       if (angle === 3) cost = 1001
//       console.log(dir1, dir2, angle, 'cost:', cost, 'prev:', prev.x, prev.y, 'next:', x, y)
//     }
//
//     neighbours.push([nodeLayout[y][x], cost])
//   }
//   return neighbours
// }
//
// // Compute shortest paths from A
// const distancesFromA = dijkstra(getDijkstraNeighbours)(start)
//
// console.log(distancesFromA.get(goal))
