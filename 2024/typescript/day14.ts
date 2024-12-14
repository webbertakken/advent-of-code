import Library from './lib'

type Position = { x: number; y: number }
type Velocity = { x: number; y: number }
type Robot = { position: Position; velocity: Velocity }

const WIDTH = 101
const HEIGHT = 103

const getRobots = (): Robot[] => {
  return Library.getInput('day14')
    .split('\n')
    .map((line) => line.match(/p=(.+,.+) v=(.+,.+)/)!.splice(1))
    .map((pair) => {
      const [[x, y], [vX, vY]] = pair.map((p) => p.split(',').map(Number))
      return { position: { x, y }, velocity: { x: vX, y: vY } }
    })
}

const getPositionAfterMovingTimes = ({ position, velocity }: Robot, times = 1) => {
  return {
    x: (position.x + (velocity.x + WIDTH) * times) % WIDTH,
    y: (position.y + (velocity.y + HEIGHT) * times) % HEIGHT,
  }
}

const draw = (robots: Robot[]) => {
  for (let y = 0; y < HEIGHT; y++) {
    let row = ''
    for (let x = 0; x < WIDTH; x++) {
      if (robots.some(({ position }) => position.x === x && position.y === y)) {
        row += '#'
      } else {
        row += ' '
      }
    }
    console.log(row)
  }
}

// Drawing the resulting picture
export const drawPicture = () => {
  const robots = getRobots()
  for (const robot of robots) robot.position = getPositionAfterMovingTimes(robot, 7502)
  draw(robots)
}
drawPicture()

// Part 1
export const getSafetyFactorAfter100Seconds = () => {
  const robots = getRobots()

  const horizontalMiddle = Math.floor(WIDTH / 2)
  const verticalMiddle = Math.floor(HEIGHT / 2)

  const quadrants = [0, 0, 0, 0]
  for (const robot of robots) {
    const position = getPositionAfterMovingTimes(robot, 100)
    if (position.x < horizontalMiddle && position.y < verticalMiddle) quadrants[0]++
    if (position.x > horizontalMiddle && position.y < verticalMiddle) quadrants[1]++
    if (position.x < horizontalMiddle && position.y > verticalMiddle) quadrants[2]++
    if (position.x > horizontalMiddle && position.y > verticalMiddle) quadrants[3]++
  }

  return quadrants.multiply()
}
console.log('Safety factor after 100 seconds:', getSafetyFactorAfter100Seconds())

// Part 2
export const getNumberOfSecondsForEasterEgg = (): number | undefined => {
  const robots = getRobots()

  const uniquePositions = new Set<string>()
  for (let seconds = 1; seconds < 1_000_000; seconds++) {
    uniquePositions.clear()
    for (const robot of robots) {
      robot.position = getPositionAfterMovingTimes(robot, 1)
      uniquePositions.add(`${robot.position.x},${robot.position.y}`)
    }

    if (uniquePositions.size === robots.length) return seconds
  }
}
console.log('Easter egg occurs after this many seconds:', getNumberOfSecondsForEasterEgg())
