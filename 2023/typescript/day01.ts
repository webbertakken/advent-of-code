import Library from './lib'

const getInput = () => Library.getInput('day01').split('\n')

// Part 1
export const simpleCalibrationValues = () => {
  let sum = 0

  getInput().forEach((line) => {
    const numbers = line.replace(/\D/g, '')
    sum += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`)
  })

  return sum
}
console.log('Part 1:', simpleCalibrationValues())

// Part 2
export const correctedCalibrationValues = () => {
  let sum = 0

  getInput().forEach((line) => {
    const numbers = line
      .replace(/one/g, 'o1e')
      .replace(/two/g, 't2o')
      .replace(/three/g, 't3e')
      .replace(/four/g, '4')
      .replace(/five/g, '5e')
      .replace(/six/g, '6')
      .replace(/seven/g, '7n')
      .replace(/eight/g, 'e8t')
      .replace(/nine/g, 'n9e')
      .replace(/\D/g, '')

    sum += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`)
  })

  return sum
}
console.log('Part 2:', correctedCalibrationValues())
