import Library from './lib'

const getInput = () => Library.getInput('day03')

const getSumOfInstructions = (instructions: string[]): number => {
  let sum = 0
  for (const instruction of instructions) {
    // @ts-ignore - typescript doesn't type named capturing groups yet: https://github.com/microsoft/TypeScript/issues/32098
    const { left, right } = instruction.match(/mul\((?<left>\d+),(?<right>\d+)\)/)?.groups
    sum += parseInt(left) * parseInt(right)
  }

  return sum
}

// Part 1
export const getSumOfAllInstructions = () => {
  const validInstructions = getInput().match(/mul\(\d+,\d+\)/g) || []

  return getSumOfInstructions(validInstructions)
}
console.log('Part 1:', getSumOfAllInstructions())

// Part 2
export const getSumOfEnabledInstructions = () => {
  const validInstructions =
    getInput()
      .replace(/don't\(\)[\S\s]*?do\(\)/g, '')
      .match(/mul\(\d+,\d+\)/g) || []

  return getSumOfInstructions(validInstructions)
}
console.log('Part 2:', getSumOfEnabledInstructions())
