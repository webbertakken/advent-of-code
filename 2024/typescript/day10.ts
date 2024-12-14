import Library from './lib'

type Position = { x: number; y: number }
type Direction = { x: -1 | 0 | 1; y: -1 | 0 | 1 }

const directions: Direction[] = [
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
  { x: 0, y: -1 },
]

const getMap = () =>
  Library.getInput('day10')
    .split('\n')
    .map((line) => line.split('').map(Number))

function* getTrailheads(matrix: number[][]) {
  for (const [y, row] of matrix.entries()) {
    for (const [x, item] of row.entries()) {
      if (item === 0) {
        yield { x, y }
      }
    }
  }
}

function* findSummits(map: number[][], startPos: Position, nextHeight = 1): Generator<Position> {
  for (const direction of directions) {
    const lookupPos: Position = { x: startPos.x + direction.x, y: startPos.y + direction.y }
    const lookup = map[lookupPos.y]?.[lookupPos.x]

    // Not a valid path
    if (lookup !== nextHeight) continue

    // Follow the path, forward any summit yields
    if (lookup !== 9) for (const summit of findSummits(map, lookupPos, nextHeight + 1)) yield summit

    // Summit
    if (lookup === 9) yield lookupPos
  }
}

// Part 1
export const getCombinedTrailheadScores = () => {
  const map = getMap()

  return getTrailheads(map)
    .toArray()
    .map((trailhead) => new Set<string>([...findSummits(map, trailhead)].map(({ x, y }) => `${x},${y}`)).size)
    .sum()
}
console.log('Scores of all trailheads combined:', getCombinedTrailheadScores())

// Part 2
export const getCombinedNumberOfTrails = () => {
  const map = getMap()

  return getTrailheads(map)
    .toArray()
    .map((trailhead) => findSummits(map, trailhead).toArray().length)
    .sum()
}
console.log('Combined number of possible trails:', getCombinedNumberOfTrails())
