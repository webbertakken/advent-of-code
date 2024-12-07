import Library from './lib'

const getInput = () =>
  Library.getInput('day07')
    .split('\n')
    .map((line) => line.replace(/:/, '').split(/\s+/).map(Number))

type Operator = '+' | '*' | '||'

const calculate = (a: number, b: number, operator: Operator): number => {
  switch (operator) {
    case '+':
      return a + b
    case '*':
      return a * b
    case '||':
      return parseInt(`${a}${b}`)
  }
}

const getCalibrationValue = (parts: number[], expectation: number, operators: Operator[]): number => {
  const [a, b, ...rest] = parts
  for (const operator of operators) {
    let result = calculate(a, b, operator)
    if (rest.length <= 0) {
      if (result === expectation) return expectation
    } else {
      if (expectation === getCalibrationValue([result, ...rest], expectation, operators)) return expectation
    }
  }

  return 0
}

// Part 1
export const getTotalCalibrationResult = () => {
  const equations = getInput()

  let sum = 0
  for (const [expectation, ...parts] of equations) {
    sum += getCalibrationValue(parts, expectation, ['+', '*'])
  }

  return sum
}
console.log('Calibration result for operators + and * is:', getTotalCalibrationResult())

// Part 2
export const getRevisedTotalCalibrationResult = () => {
  const equations = getInput()

  let sum = 0
  for (const [expectation, ...parts] of equations) {
    sum += getCalibrationValue(parts, expectation, ['+', '*', '||'])
  }

  return sum
}
console.log('Calibration result for operators +, * and || is:', getRevisedTotalCalibrationResult())
