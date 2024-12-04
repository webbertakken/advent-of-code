import Library from './lib'

const getInput = () => Library.getInput('day04').split('\n')

// Part 1
export const getXmasCount = () => {
  const wordSearch = getInput()

  const search = (x: number, y: number, word: string, direction: { x: number; y: number }, index = 1): boolean => {
    if (index === word.length) return true

    const nextX = x + direction.x
    const nextY = y + direction.y

    return wordSearch[nextY]?.[nextX] === word[index] ? search(nextX, nextY, word, direction, index + 1) : false
  }

  const searchInEachDirection = (x: number, y: number, word: string) => {
    return [
      search(x, y, word, { x: 1, y: 0 }),
      search(x, y, word, { x: 1, y: 1 }),
      search(x, y, word, { x: 0, y: 1 }),
      search(x, y, word, { x: -1, y: 1 }),
      search(x, y, word, { x: -1, y: 0 }),
      search(x, y, word, { x: -1, y: -1 }),
      search(x, y, word, { x: 0, y: -1 }),
      search(x, y, word, { x: 1, y: -1 }),
    ].filter(Boolean).length
  }

  let count = 0
  for (let y = 0; y < wordSearch.length; y++) {
    for (let x = 0; x < wordSearch[y].length; x++) {
      if (wordSearch[y][x] !== 'X') continue
      count += searchInEachDirection(x, y, 'XMAS')
    }
  }

  return count
}
console.log('Amount of XMAS found:', getXmasCount())

// Part 2
export const getCrossedMasCount = () => {
  const wordSearch = getInput()

  let count = 0
  for (let y = 0; y < wordSearch.length; y++) {
    for (let x = 0; x < wordSearch[y].length; x++) {
      if (wordSearch[y][x] !== 'A') continue
      const half = ['SAM', 'MAS']
      if (!half.includes(`${wordSearch[y - 1]?.[x - 1]}${wordSearch[y][x]}${wordSearch[y + 1]?.[x + 1]}`)) continue
      if (!half.includes(`${wordSearch[y - 1]?.[x + 1]}${wordSearch[y][x]}${wordSearch[y + 1]?.[x - 1]}`)) continue
      ++count
    }
  }

  return count
}
console.log('Amount of crossed MAS found:', getCrossedMasCount())
