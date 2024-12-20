import Library from './lib'
import { aStar, manhattanHeuristic, Position } from './lib/aStar'

const possibleTiles = ['.', '#', 'S', 'E'] as const

type Tile = (typeof possibleTiles)[number]

interface Node extends Position {
  value: Tile
}

interface Input {
  matrix: Node[][]
  start: Node
  goal: Node
  walls: Set<Node>
  isExample: boolean
}

const getInput = (): Input => {
  const walls = new Set<Node>()
  let start = {} as Node
  let goal = {} as Node
  const input = Library.getInput('day20')
  const isExample = input.length < 20021
  const matrix = input.split('\n').map((line, y) =>
    line.split('').map((value, x) => {
      const node: Node = { x, y, value: value as Tile }
      if (value === 'S') start = node
      if (value === 'E') goal = node
      if (value === '#') walls.add(node)
      return node
    }),
  )

  return { matrix, start, goal, walls, isExample }
}

const getFastestRoute = (matrix: Node[][], start: Node, goal: Node) => {
  const getCost = (prev: Node | undefined, current: Node, next: Node, step: number) =>
    next.value === '#' ? Infinity : 1
  return aStar(matrix, start, goal, getCost, manhattanHeuristic)
}

// Part 1
export const part1 = () => {
  const { matrix, start, goal, walls, isExample } = getInput()
  const getCost = (prev: any, current: any, next: any) => (next.value === '#' ? Infinity : 1)
  const fastestRoute = aStar(matrix, start, goal, getCost, manhattanHeuristic)!
  console.log(fastestRoute.length - 1)

  const savedTime = new Map<number, number>()
  let iteration = 0
  for (const wall of walls) {
    iteration++
    // console.log(`Iteration ${iteration}/${walls.size}`)
    matrix[wall.y][wall.x].value = '.'
    const steps = aStar(matrix, start, goal, getCost, manhattanHeuristic)
    matrix[wall.y][wall.x].value = '#'
    if (steps) {
      const saved = fastestRoute.length - steps.length
      savedTime.set(saved, (savedTime.get(saved) || 0) + 1)
    }
  }

  let sum = 0
  savedTime.forEach((count, steps) => {
    if (isExample || steps >= 100) {
      sum += count
      console.log(steps, count)
    }
  })

  return sum
}
// console.log('Part 1:', part1())

// Part 2
export const part2 = () => {
  const { matrix, start, goal, isExample } = getInput()
  const fastestRoute = getFastestRoute(matrix, start, goal)!
  console.log(fastestRoute.length - 1)

  const savedTime = new Map<number, number>()

  for (const stepIndex of fastestRoute.keys()) {
    console.log(`Step ${stepIndex}/${fastestRoute.length}.`)
    for (let i = 0; i < 20; i++) {
      const getCost = (prev: Node | undefined, current: Node, next: Node, index: number) => {
        // console.log('index', index, [current.x, current.y], [next.x, next.y])

        if (index >= stepIndex && index <= stepIndex + i) {
          // console.log(`index ${index} is in range ${stepIndex} - ${stepIndex + i}. Allowing all directions.`)
          return 1
        }

        return next.value === '#' ? Infinity : 1
      }
      const cheatedRoute = aStar(matrix, start, goal, getCost, manhattanHeuristic)!
      if (cheatedRoute) {
        const saved = fastestRoute.length - cheatedRoute.length
        savedTime.set(saved, (savedTime.get(saved) || 0) + 1)
      }
    }
  }

  let sum = 0
  const list: [number, number][] = []
  savedTime.forEach((count, steps) => {
    if (isExample || steps >= 100) {
      sum += count
      list.push([steps, count])
    }
  })

  list
    .sort((a, b) => a[0] - b[0])
    .forEach(([steps, count]) => {
      console.log(`There are ${count} cheats that save ${steps} picoseconds.`)
    })

  return sum
}
// console.log('Part 2:', part2()) // 134844 too low
