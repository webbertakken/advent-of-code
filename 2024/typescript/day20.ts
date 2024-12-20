import Library from './lib'
import { aStar, manhattanHeuristic, Position } from './lib/aStar'

const possibleTiles = ['.', '#', 'S', 'E'] as const

type Tile = (typeof possibleTiles)[number]

interface Node extends Position {
  value: Tile
}

const getInput = () => {
  const walls = new Set<Node>()
  let start = {} as Node
  let goal = {} as Node
  const matrix = Library.getInput('day20')
    .split('\n')
    .entries()
    .map(([y, line]) =>
      line
        .split('')
        .entries()
        .map(([x, value]) => {
          const node = { x, y, value }
          if (value === 'S') start = node
          if (value === 'E') goal = node
          if (value === '#') walls.add(node)
          return node
        })
        .toArray(),
    )
    .toArray()

  return [matrix, start, goal, walls]
}

// Part 1
export const part1 = () => {
  const [matrix, start, goal, walls] = getInput()
  const getCost = (prev: any, current: any, next: any) => (next.value === '#' ? Infinity : 1)
  const fastestRoute = aStar(matrix, start, goal, getCost, manhattanHeuristic)!
  console.log(fastestRoute.length - 1)

  // matrix.forEach(row => {
  //   console.log(row.map(c => c.value).join(''))
  // })

  // console.log(walls)
  const savedTime = new Map<number, number>()
  let iteration = 0
  for (const wall of walls) {
    iteration++
    console.log(`Iteration ${iteration}/${walls.size}`)
    matrix[wall.y][wall.x].value = '.'
    const steps = aStar(matrix, start, goal, getCost, manhattanHeuristic)
    matrix[wall.y][wall.x].value = '#'
    if (steps) {
      const saved = fastestRoute.length - steps.length
      savedTime.set(saved, savedTime.get(saved) + 1 || 1)
    }
  }

  let sum = 0
  savedTime.entries().forEach(([steps, count]) => {
    if (steps >= 100) {
      sum += count
      console.log(steps, count)
    }
  })

  return sum
}
console.log('Part 1:', part1())

// Part 2
export const part2 = () => {
  getInput()

  return 0
}
// console.log("Part 2:", part2());
