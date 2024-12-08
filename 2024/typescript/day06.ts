import Library from './lib'

const getInput = () => Library.getInput('day06')

const directions = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
]

const getLabAndGuardStartingPosition = (): [string[][], { x: number; y: number }] => {
  const layoutAsText = getInput()

  const lab = layoutAsText.split('\n').map((line) => line.split(''))
  const width = layoutAsText.indexOf('\n') + 1
  const guardIndex = layoutAsText.indexOf('^')
  const guardStartingPosition = { x: guardIndex % width, y: Math.floor(guardIndex / width) }

  return [lab, guardStartingPosition]
}

// Part 1
export const getGuardsDistinctVisitedPositions = () => {
  const [lab, pos] = getLabAndGuardStartingPosition()

  let count = 0
  let direction = 0
  const dir = () => directions[direction % 4]
  while (typeof lab[pos.y]?.[pos.x] !== 'undefined') {
    if (lab[pos.y + dir().y]?.[pos.x + dir().x] === '#') {
      ++direction
      continue
    }

    if (lab[pos.y][pos.x] !== 'X') {
      lab[pos.y][pos.x] = 'X'
      ++count
    }

    pos.x += dir().x
    pos.y += dir().y
  }

  return count
}
console.log('The guard visited this many unique positions:', getGuardsDistinctVisitedPositions())

// Part 2
export const getPossiblePlacesForObstacles = () => {
  const [lab, pos] = getLabAndGuardStartingPosition()

  function doesComplete(labCopy: string[][], pos: { x: number; y: number }) {
    let direction = 0
    let reasonableAmountOfStepsLeft = labCopy.length * labCopy[0].length
    const dir = () => directions[direction % 4]
    while (typeof labCopy[pos.y]?.[pos.x] !== 'undefined') {
      if (labCopy[pos.y + dir().y]?.[pos.x + dir().x] === '#') {
        ++direction
        continue
      }

      pos.x += dir().x
      pos.y += dir().y

      reasonableAmountOfStepsLeft--
      if (reasonableAmountOfStepsLeft <= 0) return false
    }

    return true
  }

  let placeForObstacle = 0
  for (let y = 0; y < lab.length; y++) {
    for (let x = 0; x < lab[y].length; x++) {
      if (lab[y][x] === '.') {
        const labCopy = lab.map((line) => [...line])
        labCopy[y][x] = '#'
        if (!doesComplete(labCopy, { x: pos.x, y: pos.y })) placeForObstacle++
      }
    }
  }

  return placeForObstacle
}
console.log('Number of places where an obstacle can be placed:', getPossiblePlacesForObstacles())
