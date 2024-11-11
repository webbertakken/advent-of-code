import Library from './lib'

enum Direction {
  Up = 'U',
  Right = 'R',
  Down = 'D',
  Left = 'L',
}

const getInput = () =>
  Library.getInput('day09')
    .split('\n')
    .map((instruction) => {
      const [dir, ...moves] = instruction.split('')
      return ''
        .padStart(Number(moves.join('')), dir)
        .split('')
        .map((d) => <Direction>d)
    })
    .flat()

const countVisited = (moves: Direction[], tails = 1) => {
  const visited = new Set<string>().add('0,0')

  const snake = []
  for (let i = 0; i <= tails; i++) snake.push({ x: 0, y: 0 })

  for (const move of moves) {
    if (move === Direction.Up) snake[0].y++
    if (move === Direction.Right) snake[0].x++
    if (move === Direction.Down) snake[0].y--
    if (move === Direction.Left) snake[0].x--
    for (let i = 1; i <= tails; i++) {
      if (Math.abs(snake[i].x - snake[i - 1].x) > 1 || Math.abs(snake[i].y - snake[i - 1].y) > 1) {
        snake[i].x += Math.sign(snake[i - 1].x - snake[i].x)
        snake[i].y += Math.sign(snake[i - 1].y - snake[i].y)
        if (i === tails) visited.add(`${snake[i].x},${snake[i].y}`)
      }
    }
  }

  return visited.size
}

// Part 1
export const getTailVisitedCount = () => countVisited(getInput())
console.log('Tail visited #:', getTailVisitedCount())

// Part 2
export const getNinthTailVisitCount = () => countVisited(getInput(), 9)
console.log('Ninth tail visited #:', getNinthTailVisitCount())
