import Library from './lib'

const getInput = () => Library.getInput('day01').split('\n')

const getLists = () => {
  const listA = []
  const listB = []

  for (const [a, b] of getInput().map((line) => line.split(/\s+/).map(Number))) {
    listA.push(a)
    listB.push(b)
  }

  listA.sort()
  listB.sort()

  return [listA, listB]
}

// Part 1
export const getTotalDistanceBetweenPairs = () => {
  const [listA, listB] = getLists()

  let distance = 0
  for (let i = 0; i < listA.length; ++i) {
    distance += Math.abs(listA[i] - listB[i])
  }

  return distance
}

console.log('Total distance between pairs:', getTotalDistanceBetweenPairs())

// Part 2
export const getTotalSimilarityScore = () => {
  const [listA, listB] = getLists()

  let similarityScore = 0
  for (const item of listA) {
    similarityScore += listB.filter((x) => x === item).length * item
  }

  return similarityScore
}
console.log('Total similarity score:', getTotalSimilarityScore())
