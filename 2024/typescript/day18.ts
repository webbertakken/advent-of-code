import Library from './lib'
import { aStar, manhattanHeuristic, Position } from './lib/aStar'

const possibleTiles = ['.', '#'] as const

type Tile = (typeof possibleTiles)[number]

export interface Node extends Position {
  value: Tile
}

const getBytes = () =>
  Library.getInput('day18')
    .split('\n')
    .map((line) => line.split(',').map(Number))

const getCost = (prev: Node, current: Node, next: Node): number => {
  return next.value === '#' ? Infinity : 1
}

function getWalker(isExample = false) {
  const dimension = isExample ? 7 : 71
  const start: Node = { x: 0, y: 0, value: '.' }
  const goal: Node = isExample ? { x: 6, y: 6, value: '.' } : { x: 70, y: 70, value: '.' }

  const matrix: Node[][] = []
  for (let y = 0; y < dimension; y++) {
    matrix[y] = []
    for (let x = 0; x < dimension; x++) {
      matrix[y][x] = { x, y, value: '.' }
    }
  }

  const run = () => aStar(matrix, start, goal, getCost, manhattanHeuristic)

  return { matrix, run }
}

// Part 1
export const getShortestPathAfterBytesHaveFallen = () => {
  const bytes = getBytes()
  const isExample = bytes.length < 3450
  const numFallingBytes = isExample ? 12 : 1024

  const { matrix, run } = getWalker(isExample)

  for (let i = 0; i < numFallingBytes; i++) {
    const [x, y] = bytes[i]
    matrix[y][x].value = '#'
  }

  return (run() || []).length - 1
}
console.log('Number of steps for the shortest path:', getShortestPathAfterBytesHaveFallen())

// Part 2
export const getByteThatClosesThePath = () => {
  const bytes = getBytes()
  const isExample = bytes.length < 3450
  const lastSectionStart = bytes.length - bytes.length / 5

  const { matrix, run } = getWalker(isExample)

  for (const [index, [x, y]] of bytes.entries()) {
    matrix[y][x].value = '#'
    if (index > lastSectionStart && !run()?.length) return `${x},${y}`
  }

  return 'No solution found'
}
console.log('Byte that closes the path:', getByteThatClosesThePath())
