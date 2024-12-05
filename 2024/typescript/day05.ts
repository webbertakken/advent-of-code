import Library from './lib'

const getInput = () =>
  Library.getInput('day05')
    .split('\n\n')
    .map((input) => input.split('\n').map((line) => line.split(/[|,]/).map(Number)))

const createSortByOrderingRules = (orderingRules: number[][]) => {
  const sortRegistry = new Map<number, number[]>()
  for (const [left, right] of orderingRules) {
    sortRegistry.set(left, [...(sortRegistry.get(left) ?? []), right])
  }

  return (a: number, b: number): number => (sortRegistry.has(a) && sortRegistry.get(a)?.includes(b) ? -1 : 1)
}

const getSumOfMiddlePageNumbers =
  (fromCorrectUpdates: boolean = true) =>
  () => {
    const [orderingRules, updates] = getInput()
    const sortByOrderingRules = createSortByOrderingRules(orderingRules)

    let sum = 0
    for (const original of updates) {
      const sorted = original.toSorted(sortByOrderingRules)
      const isEquallySorted = original.every((value, index) => value === sorted[index])
      if (fromCorrectUpdates === isEquallySorted) sum += sorted[Math.floor(sorted.length / 2)]
    }

    return sum
  }

// Part 1
export const getSumOfMiddlePageNumbersFromCorrectUpdates = getSumOfMiddlePageNumbers()
console.log('Sum of middle page numbers from correct updates:', getSumOfMiddlePageNumbersFromCorrectUpdates())

// Part 2
export const getSumOfMiddlePageNumbersFromIncorrectUpdates = getSumOfMiddlePageNumbers(false)
console.log('Sum of middle page numbers from incorrect updates:', getSumOfMiddlePageNumbersFromIncorrectUpdates())
