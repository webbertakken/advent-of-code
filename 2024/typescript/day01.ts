import Library from './lib'

const getInput = () => Library.getInput('day01').split('\n')

const getLists = () => {
  const lists: { [key: string]: number[] } = { left: [], right: [] }

  for (const [a, b] of getInput().map((line) => line.split(/\s+/).map(Number))) {
    lists.left.push(a)
    lists.right.push(b)
  }

  return [lists.left.sort(), lists.right.sort()]
}

// Part 1
export const getTotalDistanceBetweenPairs = () => {
  const [left, right] = getLists()

  let distance = 0
  for (let i = 0; i < left.length; ++i) {
    distance += Math.abs(left[i] - right[i])
  }

  return distance
}
console.log('Total distance between pairs:', getTotalDistanceBetweenPairs())

// Part 2
export const getTotalSimilarityScore = () => {
  const [left, right] = getLists()

  // Count the number of times each number appears in list B
  const rightNumberCounts = new Map<number, number>()
  for (const number of right) {
    rightNumberCounts.set(number, (rightNumberCounts.get(number) ?? 0) + 1)
  }

  // Get the count of each number in list A and multiply it by the number
  let similarityScore = 0
  for (const number of left) {
    similarityScore += (rightNumberCounts.get(number) ?? 0) * number
  }

  return similarityScore
}
console.log('Total similarity score:', getTotalSimilarityScore())
