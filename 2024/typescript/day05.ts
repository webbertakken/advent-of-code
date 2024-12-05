import Library from './lib'

const getInput = () =>
  Library.getInput('day05')
    .split('\n\n')
    .map((input) => input.split('\n').map((line) => line.split(/[|,]/).map(Number)))

const sortByOrderingRules =
  (orderingRules: number[][]) =>
  (a: number, b: number): number => {
    for (const [left, right] of orderingRules) {
      if (left === a && right === b) return -1
      if (left === b && right === a) return 1
    }
    return 0
  }

const getSumOfMiddlePageNumbers =
  (fromCorrectUpdates: boolean = true) =>
  () => {
    const [orderingRules, updates] = getInput()

    let sumOfMiddlePageNumbers = 0
    for (const original of updates) {
      const sorted = original.toSorted(sortByOrderingRules(orderingRules))
      const isEquallySorted = JSON.stringify(original) === JSON.stringify(sorted)
      if (fromCorrectUpdates === isEquallySorted) sumOfMiddlePageNumbers += sorted[Math.floor(sorted.length / 2)]
    }

    return sumOfMiddlePageNumbers
  }

// Part 1
export const getSumOfMiddlePageNumbersFromCorrectUpdates = getSumOfMiddlePageNumbers()
console.log('Part 1:', getSumOfMiddlePageNumbersFromCorrectUpdates())

// Part 2
export const getSumOfMiddlePageNumbersFromIncorrectUpdates = getSumOfMiddlePageNumbers(false)
console.log('Part 2:', getSumOfMiddlePageNumbersFromIncorrectUpdates())
