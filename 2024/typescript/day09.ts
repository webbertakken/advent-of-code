import Library from './lib'

const getInput = (): string => Library.getInput('day09')

const generateChecksum = (disk: number[]) => disk.reduce((acc, curr, index) => acc + curr * index, 0)

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
        if (done) yield '.'

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
  const chunks = []

  for (let i = 0; i < disk.length; i++) {
    const numberOfBits = Number(disk[i])
    const id = i % 2 === 0 ? i / 2 : null
    chunks.push([id, numberOfBits])
  }

  for (let rightIndex = chunks.length - 1; rightIndex >= 0; rightIndex--) {
    if (chunks[rightIndex][0] === null) continue

    for (let leftIndex = 0; leftIndex < chunks.length; leftIndex++) {
      if (chunks[leftIndex][0] !== null) continue
      if (leftIndex >= rightIndex) break

      // Check if there is enough space to move the chunk
      const spaceLeft = chunks[leftIndex][1] - chunks[rightIndex][1]
      if (spaceLeft < 0) continue

      // Remove the chunk from the right
      const chunk = chunks[rightIndex]
      chunks[rightIndex] = [null, chunk[1]]

      // Move the chunk to the left
      if (spaceLeft === 0) chunks[leftIndex] = chunk
      if (spaceLeft > 0) {
        chunks[leftIndex] = chunk
        chunks.splice(leftIndex + 1, 0, [null, spaceLeft])
        rightIndex++
      }

      break
    }
  }

  for (const [id, numberOfBits] of chunks) {
    for (let i = 0; i < numberOfBits; i++) {
      yield id
    }
  }
}

// Part 1
export const getChecksumAfterDefragmentingPerBit = () => {
  const disk = getInput()

  return generateChecksum([...defragmentPerBit(disk)])
}
console.log('Checksum after defragmenting per bit:', getChecksumAfterDefragmentingPerBit())

// Part 2
export const getChecksumAfterDefragmentingPerFile = () => {
  const disk = getInput()

  return generateChecksum([...defragmentPerFile(disk)])
}
console.log('Checksum after defragmenting per file:', getChecksumAfterDefragmentingPerFile())
