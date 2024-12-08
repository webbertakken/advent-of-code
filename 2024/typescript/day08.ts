import Library from './lib'

const getInput = () =>
  Library.getInput('day08')
    .split('\n')
    .map((line) => line.split(''))

const getMatrix = () => {
  const matrix = getInput()
  const height = matrix.length
  const width = matrix[0].length

  return { matrix, height, width }
}

function* nodesAndDistancesIterator() {
  const { matrix } = getMatrix()

  const antennaLocations = new Map<string, string[]>()
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const symbol = matrix[y][x]
      if (symbol !== '.') antennaLocations.get(symbol)?.push(`${x},${y}`) || antennaLocations.set(symbol, [`${x},${y}`])
    }
  }

  for (const [_, locations] of antennaLocations) {
    for (let i = 0; i < locations.length; i++) {
      const [x1, y1] = locations[i].split(',').map(Number)
      for (const location of locations.slice(i + 1)) {
        const [x2, y2] = location.split(',').map(Number)
        const deltaX = Math.abs(x1 - x2)
        const deltaY = Math.abs(y1 - y2)

        yield { x1, y1, x2, y2, deltaX, deltaY }
      }
    }
  }
}

// Part 1
export const getNumberOfAntiNodes = () => {
  const antiNodeLocations = new Set<string>()

  const { width, height } = getMatrix()
  for (const { x1, y1, x2, y2, deltaX, deltaY } of nodesAndDistancesIterator()) {
    ;[
      { x: x1 > x2 ? x1 + deltaX : x1 - deltaX, y: y1 > y2 ? y1 + deltaY : y1 - deltaY },
      { x: x2 > x1 ? x2 + deltaX : x2 - deltaX, y: y2 > y1 ? y2 + deltaY : y2 - deltaY },
    ]
      .filter(({ x, y }) => !(x < 0 || x >= width || y < 0 || y >= height))
      .forEach(({ x, y }) => antiNodeLocations.add(`${x},${y}`))
  }

  return antiNodeLocations.size
}
console.log('Number of anti-nodes:', getNumberOfAntiNodes())

// Part 2
export const getNumberOfAllAntiNodes = () => {
  const antiNodeLocations = new Set<string>()

  const { width, height } = getMatrix()
  for (const { x1, y1, x2, y2, deltaX, deltaY } of nodesAndDistancesIterator()) {
    const xStepsBefore = Math.floor(x1 / deltaX)
    const xStepsAfter = Math.floor((width - x1) / deltaX)

    const shouldAlignY = (x1 > x2 && y1 > y2) || (x1 < x2 && y1 < y2)

    for (let j = 0; j <= xStepsBefore; ++j) {
      const x = x1 - deltaX * j
      const y = shouldAlignY ? y1 - deltaY * j : y1 + deltaY * j
      if (x < 0 || x >= width || y < 0 || y >= height) continue
      antiNodeLocations.add(`${x},${y}`)
    }

    for (let j = 1; j <= xStepsAfter; ++j) {
      const x = x1 + deltaX * j
      const y = shouldAlignY ? y1 + deltaY * j : y1 - deltaY * j
      if (x < 0 || x >= width || y < 0 || y >= height) continue
      antiNodeLocations.add(`${x},${y}`)
    }
  }

  return antiNodeLocations.size
}
console.log('Number of all anti-nodes:', getNumberOfAllAntiNodes())
