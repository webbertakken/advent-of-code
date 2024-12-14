import Library from './lib'

const EMPTY = -1 as const

const getDisk = (): string => Library.getInput('day09')

const generateChecksum = (disk: number[]) => {
  return disk.map((n) => (n === EMPTY ? 0 : n)).reduce((checksum, bit, index) => checksum + bit * index, 0)
}

function* defragmentPerBit(disk: string): Generator<number> {
  function* takeFromEnd(disk: string): Generator<[number, number, number]> {
    let pointer = disk.length - 1
    while (pointer >= 0) {
      if (pointer % 2 === 0) {
        const numberOfBits = Number(disk[pointer])
        for (let currentBit = 1; currentBit < numberOfBits + 1; currentBit++) {
          const id = pointer / 2

          yield [id, pointer, currentBit]
        }
      }
      pointer--
    }
  }

  const fromEnd = takeFromEnd(disk)

  let pointer = 0
  let endPointer = disk.length - 1

  let bit = 0
  let endBit = 0

  while (pointer < disk.length) {
    const numberOfBits = Number(disk[pointer])
    const isFinished = () => pointer > endPointer || (pointer === endPointer && bit + endBit > numberOfBits)

    for (let currentBit = 1; currentBit < numberOfBits + 1; currentBit++) {
      if (pointer % 2 === 0) {
        // Read from left
        bit = currentBit

        if (isFinished()) return

        yield pointer / 2
      } else {
        // Read from right
        const { value, done } = fromEnd.next()
        if (done) yield -1

        const [id, endPointerValue, endBitValue] = value
        endPointer = endPointerValue
        endBit = endBitValue

        if (isFinished()) return

        yield id
      }
    }

    pointer++
  }
}

function* defragmentPerFile(disk: string) {
  const space: [number, number][] = []

  for (let i = 0; i < disk.length; i++) {
    const numberOfBits = Number(disk[i])
    const id = i % 2 === 0 ? i / 2 : EMPTY
    space.push([id, numberOfBits])
  }

  for (let rightIndex = space.length - 1; rightIndex >= 0; rightIndex--) {
    if (space[rightIndex][0] === EMPTY) continue

    for (let leftIndex = 0; leftIndex < space.length; leftIndex++) {
      if (space[leftIndex][0] !== EMPTY) continue
      if (leftIndex >= rightIndex) break

      // Check if there is enough space to move the whole file
      const spaceLeft = space[leftIndex][1] - space[rightIndex][1]
      if (spaceLeft < 0) continue

      // Remove the file from the right
      const file = space[rightIndex]
      space[rightIndex] = [EMPTY, file[1]]

      // Move the file to the left
      if (spaceLeft === 0) space[leftIndex] = file
      if (spaceLeft > 0) {
        space[leftIndex] = file
        space.splice(leftIndex + 1, 0, [EMPTY, spaceLeft])
        rightIndex++
      }

      break
    }
  }

  for (const [id, numberOfBits] of space) {
    for (let i = 0; i < numberOfBits; i++) {
      yield id
    }
  }
}

// Part 1
export const getChecksumAfterDefragmentingPerBit = () => generateChecksum([...defragmentPerBit(getDisk())])
console.log('Checksum after defragmenting per bit:', getChecksumAfterDefragmentingPerBit())

// Part 2
export const getChecksumAfterDefragmentingPerFile = () => generateChecksum([...defragmentPerFile(getDisk())])
console.log('Checksum after defragmenting per file:', getChecksumAfterDefragmentingPerFile())
