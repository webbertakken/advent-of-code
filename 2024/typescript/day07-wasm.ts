import Library from './lib'
import { initSync, get_calibration_value } from './wasm_optimisations/pkg'
import { readFileSync } from 'fs'

initSync(readFileSync('./wasm_optimisations/pkg/wasm_optimisations_bg.wasm'))

const getInput = () =>
  Library.getInput('day07')
    .split('\n')
    .map((line) => line.replace(/:/, '').split(/\s+/).map(Number))

// Part 1
export const wasmGetTotalCalibrationResult = () => {
  const equations = getInput()

  let sum = 0
  for (const [expectation, ...parts] of equations) {
    sum += Number(get_calibration_value(new BigInt64Array(parts.map(BigInt)), BigInt(expectation), ['+', '*']))
  }

  return sum
}
console.log('Calibration result for operators + and * is:', wasmGetTotalCalibrationResult())

// Part 2
export const wasmGetRevisedTotalCalibrationResult = () => {
  const equations = getInput()

  let sum = 0
  for (const [expectation, ...parts] of equations) {
    sum += Number(get_calibration_value(new BigInt64Array(parts.map(BigInt)), BigInt(expectation), ['+', '*', '||']))
  }

  return sum
}
console.log('Calibration result for operators +, * and || is:', wasmGetRevisedTotalCalibrationResult())
