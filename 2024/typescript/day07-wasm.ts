import Library from './lib'
import { initSync, get_calibration_value } from './wasm_optimisations/pkg'
import { readFileSync } from 'fs'

initSync(readFileSync('./wasm_optimisations/pkg/wasm_optimisations_bg.wasm'))

const getEquations = () =>
  Library.getInput('day07')
    .split('\n')
    .map((line) => line.replace(/:/, '').split(/\s+/).map(Number))

// Part 1
export const wasmGetTotalCalibrationResult = () => {
  return Number(
    getEquations()
      .map(([expectation, ...parts]) =>
        get_calibration_value(new BigInt64Array(parts.map(BigInt)), BigInt(expectation), ['+', '*']),
      )
      .sum(),
  )
}
console.log('Calibration result for operators + and * is:', wasmGetTotalCalibrationResult())

// Part 2
export const wasmGetRevisedTotalCalibrationResult = () => {
  return Number(
    getEquations()
      .map(([expectation, ...parts]) =>
        get_calibration_value(new BigInt64Array(parts.map(BigInt)), BigInt(expectation), ['+', '*', '||']),
      )
      .reduce((a, b) => a + b, BigInt(0)),
  )
}
console.log('Calibration result for operators +, * and || is:', wasmGetRevisedTotalCalibrationResult())
