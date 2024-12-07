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
  const startPos = { x: pos.x, y: pos.y }

  // console.log(pos)
  let dirIndex = 0
  const goodPlacesForObstacles = []

  const dir = (dirIndex: number) => directions[dirIndex % 4]
  while (typeof lab[pos.y]?.[pos.x] !== 'undefined') {
    // Probe for previous position with direction
    const probeDirIndex = (dirIndex + 1) % 4

    if (parseInt(lab[pos.y + dir(dirIndex).y]?.[pos.x + dir(dirIndex).x]) === probeDirIndex) {
      // console.log('next step will be previous path')
      // console.log('found', lab[pos.y]?.[pos.x], 'at', pos)
      const possibleObstaclePos = { x: pos.x + dir(dirIndex).x * 2, y: pos.y + dir(dirIndex).y * 2 }
      if (possibleObstaclePos.x !== startPos.x || possibleObstaclePos.y !== startPos.y) {
        goodPlacesForObstacles.push({ x: pos.x + dir(dirIndex).x * 2, y: pos.y + dir(dirIndex).y * 2 })
      }
    }

    let probePos = { x: pos.x, y: pos.y }
    const expectedDirections = ['0', '1', '2', '3'].filter((a) => a !== `${probeDirIndex}`)
    while (['.', '^', ...expectedDirections].includes(lab[probePos.y]?.[probePos.x])) {
      probePos.x += dir(probeDirIndex).x
      probePos.y += dir(probeDirIndex).y

      // console.log('probing', probePos.x, probePos.y, lab[probePos.y]?.[probePos.x], 'looking for', probeDirIndex)

      if (parseInt(lab[probePos.y]?.[probePos.x]) === probeDirIndex) {
        // console.log('coming from: ', pos.x, pos.y, 'to', probePos.x, probePos.y)
        // console.log('found', lab[probePos.y]?.[probePos.x], 'at', probePos)
        const obstaclePos = { x: pos.x + dir(dirIndex).x, y: pos.y + dir(dirIndex).y }
        if (obstaclePos.x !== startPos.x || obstaclePos.y !== startPos.y) {
          goodPlacesForObstacles.push(obstaclePos)
        }
        break
      }

      if ([undefined, '#'].includes(lab[probePos.y]?.[probePos.x])) {
        break
      }
    }
    // console.log('---')

    // first direction for each tile
    if (['.', '^'].includes(lab[pos.y][pos.x])) {
      lab[pos.y][pos.x] = (dirIndex % 4).toString()
    }

    // if guard hits a wall, change direction
    if (lab[pos.y + dir(dirIndex).y]?.[pos.x + dir(dirIndex).x] === '#') {
      dirIndex = (dirIndex + 1) % 4
      continue
    }

    pos.x += dir(dirIndex).x
    pos.y += dir(dirIndex).y
  }

  for (const obstacle of goodPlacesForObstacles) {
    lab[obstacle.y][obstacle.x] = '@'
  }

  // lab.map((line) => console.log(line))
  // console.log('good places for obstacles:', goodPlacesForObstacles)

  return goodPlacesForObstacles.length
}
console.log('Number of places where an obstacle can be placed:', getPossiblePlacesForObstacles())
