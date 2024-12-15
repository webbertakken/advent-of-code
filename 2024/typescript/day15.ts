import Library from './lib'

type Indicator = '^' | '>' | 'v' | '<'
type Direction = { x: number; y: number }
type Position = { x: number; y: number }

const directions: Record<Indicator, Direction> = {
  '^': { x: 0, y: -1 },
  '>': { x: 1, y: 0 },
  v: { x: 0, y: 1 },
  '<': { x: -1, y: 0 },
} as const

const getInput = (): [Position, string[][], Indicator[]] => {
  let [layout, moves] = Library.getInput('day15').split('\n\n')
  const width = layout.indexOf('\n')
  const robotIndex = layout.indexOf('@')
  const robot = { x: robotIndex % (width + 1), y: Math.floor(robotIndex / width) }

  return [robot, layout.split('\n').map((line) => line.split('')), moves.split('\n').join('').split('') as Indicator[]]
}

const convertToDoubleWidth = (symbol: string): string => {
  if (symbol === '#') return '##'
  if (symbol === 'O') return '[]'
  if (symbol === '.') return '..'
  if (symbol === '@') return '@.'
  throw new Error(`unexpected symbol "${symbol}".`)
}

function getSecondWarehouse() {
  const [robot, layout, moves] = getInput()

  robot.x *= 2

  for (let y = 0; y < layout.length; y++) {
    for (let x = 0; x < layout[y].length; x++) {
      layout[y][x] = convertToDoubleWidth(layout[y][x])
    }

    layout[y] = layout[y].join('').split('')
  }

  return { robot, moves, layout }
}

const findAffected = (layout: string[][], position: Position, direction: Direction): Position[] | null => {
  const nextPosition: Position = { x: position.x + direction.x, y: position.y + direction.y }
  const nextTile: string = layout[nextPosition.y][nextPosition.x]

  if (nextTile === '#') return null
  if (nextTile === '.') return []

  if (direction.x === 0) {
    if (nextTile === ']') return [nextPosition, { x: nextPosition.x - 1, y: nextPosition.y }]
    if (nextTile === '[') return [nextPosition, { x: nextPosition.x + 1, y: nextPosition.y }]
  }

  return [nextPosition]
}

const moveRobot = (robot: Position, layout: string[][], direction: Direction) => {
  const affectedTree: Position[][] = [[robot]]
  for (const [index, level] of affectedTree.entries()) {
    const nextLevelIndex = index + 1
    for (const position of level) {
      const affected = findAffected(layout, position, direction)
      if (affected === null) return
      if (affected.length === 0) continue

      if (!affectedTree[nextLevelIndex]) affectedTree[nextLevelIndex] = [] as Position[]
      const unique = affected.filter((pos) => !affectedTree[nextLevelIndex].some((p) => p.x === pos.x && p.y === pos.y))
      affectedTree[nextLevelIndex].push(...unique)
    }
  }

  for (let i = affectedTree.length - 1; i >= 0; i--) {
    const level = affectedTree[i]
    for (const position of level) {
      layout[position.y + direction.y][position.x + direction.x] = layout[position.y][position.x]
      layout[position.y][position.x] = '.'
    }
  }

  robot.x += direction.x
  robot.y += direction.y
}

function getSumOfBoxesGpsCoordinates(layout: string[][]) {
  const boxSymbols = ['[', 'O']

  let sum = 0
  for (const [y, row] of layout.entries()) {
    for (const [x, cell] of row.entries()) {
      if (boxSymbols.includes(cell)) sum += y * 100 + x
    }
  }

  return sum
}

// Part 1
export const warehouseOne = () => {
  const [robot, layout, moves] = getInput()

  for (const move of moves) moveRobot(robot, layout, directions[move])

  return getSumOfBoxesGpsCoordinates(layout)
}
console.log('Sum of GPS coordinates of objects in warehouse 1:', warehouseOne())

// Part 2
export const warehouseTwo = () => {
  const { robot, moves, layout } = getSecondWarehouse()

  for (const move of moves) moveRobot(robot, layout, directions[move])

  return getSumOfBoxesGpsCoordinates(layout)
}
console.log('Sum of GPS coordinates of objects in warehouse 2:', warehouseTwo())
