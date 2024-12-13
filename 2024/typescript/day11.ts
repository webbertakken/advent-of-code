import Library from './lib'

const getInput = () => Library.getInput('day11').split(/\s+/).map(Number)

const blink = (stone: number): number[] => {
  // 0 turns into 1
  if (stone === 0) return [1]

  // Stones with even amount of digits split in two
  const asString = `${stone}`
  if (asString.length % 2 === 0) {
    return [Number(asString.slice(0, asString.length / 2)), Number(asString.slice(asString.length / 2))]
  }

  // Other cases: multiply by 2024 (36x performance using bitwise operations)
  return [(stone << 11) - (stone << 4) - (stone << 3)]
}

function* getStones(stones: number[], iteration: number, cache: Record<string, number> = {}): Generator<number> {
  if (iteration === 0) {
    yield stones.length
    return
  }

  for (const stone of stones) {
    for (const newStone of blink(stone)) {
      // If an identical tree has already been calculated, return the cached value
      const cachedValue = cache[`${newStone},${iteration}`]
      if (cachedValue) {
        yield cachedValue
        continue
      }

      // Follow the tree and cache the value
      let cacheValue = 0
      for (const value of getStones([newStone], iteration - 1, cache)) {
        cacheValue += value
        yield value
      }
      cache[`${newStone},${iteration}`] = cacheValue
    }
  }
}

const getStonesAfterBlinking = (times: number) => {
  return () => {
    const stones = getInput()

    let sum = 0
    for (const value of getStones(stones, times)) sum += value

    return sum
  }
}

// Part 1
export const getStonesAfterBlinking25Times = getStonesAfterBlinking(25)
console.log('Stones after blinking 25 times:', getStonesAfterBlinking25Times())

// Part 2
export const getStonesAfterBlinking75Times = getStonesAfterBlinking(75)
console.log('Stones after blinking 75 times:', getStonesAfterBlinking75Times())