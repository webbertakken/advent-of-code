import Library from './lib'

const getGroups = (): number[][] =>
  Library.getInput('day04')
    .split('\n')
    .map((a) => a.split(/[,-]/).map((number) => Number(number)))

// Part 1
export const getNumberOfCompleteOverlaps = (): number => {
  return getGroups().reduce((acc, [a, b, c, d]) => {
    const contains = a >= c && b <= d
    const overlaps = a <= c && b >= d
    return contains || overlaps ? acc + 1 : acc
  }, 0)
}
console.log('Number of complete overlaps:', getNumberOfCompleteOverlaps())

// Part 2
export const getNumberOfPartialOverlaps = (): number => {
  return getGroups().reduce((acc, [a, b, c, d]) => (a > d || b < c ? acc : acc + 1), 0)
}
console.log('Number of partial overlaps:', getNumberOfPartialOverlaps())
