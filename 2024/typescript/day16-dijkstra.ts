import Library from './lib'
import { Edge, NeighboursFn, Tile, directions, Node, dijkstra } from './lib/dijkstra'

const getInput = () =>
  Library.getInput('day16-example4')
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

  const getDijkstraNeighbours: NeighboursFn = (node: Node, prev?: Node) => {
    const neighbours: Edge[] = []

    if (prev && prev.x === node.x && prev.y === node.y) throw new Error('incorrect previous node')

    for (const direction of directions) {
      const x = node.x + direction.x
      const y = node.y + direction.y

      if (x < 0 || y < 0 || x >= layout[0].length || y >= layout.length) throw new Error('Out of bounds')

      if (layout[y][x] === '#') continue
      let cost = 1

      if (!prev) {
        if (direction.x === 1) cost = 1
        if (direction.x === -1) cost = 1001
        if (direction.y === -1) cost = 1001
        if (direction.y === 1) cost = 1001
        console.log('No prev', direction.x, direction.y, 'cost:', cost)
      } else {
        const dir1 = directions.findIndex((dir) => dir.x === prev.x - node.x && dir.y === prev.y - node.y)
        const dir2 = directions.indexOf(direction)

        // Angles: 0 = 0°, 1 = 90°, 2 = 180°, 3 = 270°
        const angle = (dir1 - dir2 + 6) % 4
        if (angle === 0) cost = 1
        if (angle === 1) cost = 1001
        if (angle === 2) continue
        if (angle === 3) cost = 1001
      }

      neighbours.push([nodeLayout[y][x], cost])
    }
    return neighbours
  }

  // Compute shortest paths from A
  const [distancesFromA, predecessors] = dijkstra(getDijkstraNeighbours)(start)

  const { path, cost } = distancesFromA.get(goal) || { path: [], cost: 0 }

  let sum2 = 0
  for (const pos of path) {
    // console.log(pos.x, pos.y, predecessors.get(pos)?.[1])
    sum2 += predecessors.get(pos)?.[1] || 0
  }

  for (let i = 0, j = 1; i < path.length; i++, j++) {
    console.log(path[i].x, path[i].y, predecessors.get(path[j])?.[1])
  }

  console.log('Sum2:', sum2)

  // console.log(predecessors)
  // Visualize the path and show sum
  let sum = 0
  for (const node of path) {
    layout[node.y][node.x] = ` `
    sum += 1
  }

  layout.map((line) => console.log(line.join('')))
  console.log('Summmmmm', sum)

  return cost
}
console.log('Part 1:', part1()) // aStar = 85440 too high // dijkstra = 84424 wrong

// Part 2
export const part2 = () => {
  getInput()

  return 0
}
// console.log("Part 2:", part2());
