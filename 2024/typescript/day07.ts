import Library from './lib'

const getEquations = () =>
  Library.getInput('day07')
    .split('\n')
    .map((line) => line.replace(/:/, '').split(/\s+/).map(Number))

type Operator = '+' | '*' | '||'

const calculate = (a: number, b: number, operator: Operator): number => {
  if (operator === '+') return a + b
  if (operator === '*') return a * b
  if (operator === '||') return Number(`${a}${b}`)
  throw new Error('Invalid operator')
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
  return getEquations()
    .map(([expectation, ...parts]) => getCalibrationValue(parts, expectation, ['+', '*']))
    .sum()
}
console.log('Calibration result for operators + and * is:', getTotalCalibrationResult())

// Part 2
export const getRevisedTotalCalibrationResult = () => {
  return getEquations()
    .map(([expectation, ...parts]) => getCalibrationValue(parts, expectation, ['+', '*', '||']))
    .sum()
}
console.log('Calibration result for operators +, * and || is:', getRevisedTotalCalibrationResult())
