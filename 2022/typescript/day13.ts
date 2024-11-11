import Library from './lib'
import { isEqual } from 'lodash'

const getInput = () =>
  Library.getInput('day13')
    .split('\n\n')
    .map((x) => x.split('\n').map((x) => JSON.parse(x)!))

// Quick way to escape a recursive function
class Correct extends Error {}

type Input = undefined | number | (number | Input)[]
export const checkOrderRecursively = (left: Input, right: Input, level = 0) => {
  // Empty array or past index of root array
  if (typeof left === 'undefined') throw new Correct()
  if (typeof right === 'undefined') throw new Error()

  // Compare numbers
  if (typeof left === 'number' && typeof right === 'number') {
    if (left < right) throw new Correct()
    if (right < left) throw new Error()
    return
  }

  // Compare arrays
  if (!Array.isArray(left)) left = [left]
  if (!Array.isArray(right)) right = [right]
  for (let i = 0; i < Math.max(left.length, right.length); i++) {
    checkOrderRecursively(left[i], right[i], level + 1)
  }
}

// Part 1
export const sumOfIndicesOfCorrectPairs = () => {
  let correct = 0
  let index = 0
  for (const [left, right] of getInput()) {
    index += 1
    try {
      checkOrderRecursively(left, right)
      correct += index
    } catch (err) {
      if (err instanceof Correct) correct += index
    }
  }

  return correct
}
console.log('Sum of indices of correct pairs:', sumOfIndicesOfCorrectPairs())

// Part 2
export const decoderKeyForDistressSignal = () => {
  const entries = getInput().flat()
  entries.push([[2]], [[6]])

  // Sorting
  entries.sort((left: any, right: any) => {
    try {
      checkOrderRecursively(left, right)
      return -1
    } catch (err) {
      return err instanceof Correct ? -1 : 1
    }
  })

  // Multiply indexes
  let indexesMultiplied = 1
  entries.forEach((value, index) => {
    if (isEqual([[2]], value) || isEqual([[6]], value)) indexesMultiplied *= index + 1
  })

  return indexesMultiplied
}
console.log('Decoder key for distress signal:', decoderKeyForDistressSignal())
