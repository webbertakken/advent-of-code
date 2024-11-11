import Library from './lib'

const getInput = () => Library.getInput('day10').split('\n')

export function* executionSequence() {
  let x = 1
  for (const line of getInput()) {
    yield x

    const [command, value] = line.split(' ')
    if (command === 'addx') {
      yield x
      x += parseInt(value)
    }
  }

  yield x
}

// Part 1
export const sumOfSixSignalStrengths = () => {
  const sequence = executionSequence()
  let i = 0
  let nextResult = 20
  let signalStrength = 0

  while (true) {
    i++
    const { value, done } = sequence.next()
    if (done) break
    if (i === nextResult) {
      nextResult += 40
      signalStrength += value * i
    }
  }

  return signalStrength
}
console.log('Sum of six signal strengths:', sumOfSixSignalStrengths())

// Part 2
export const decodedLettersAsImage = () => {
  const sequence = executionSequence()

  let i = 0
  let row = -1
  let image: string[] = []
  while (true) {
    if (i % 40 === 0) {
      row++
      if (row === 6) break
      image[row] = ''
      i = 0
    }

    const { value, done } = sequence.next()
    if (done) break

    image[row] += Math.abs(value - i) > 1 ? '.' : '#'
    i++
  }

  return '\n' + image.join('\n')
}
console.log('Decoded letters as image:', decodedLettersAsImage())
