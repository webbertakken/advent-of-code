// @ts-expect-error
import { initSync, basic_calculation } from './wasm_optimisations/pkg'
import { readFileSync } from 'fs'

initSync(readFileSync('./wasm_optimisations/pkg/wasm_optimisations_bg.wasm'))
const basicCalculation = (a: number) => a * 4 * 4 * 4 * 4

// Part 1
export const typescriptNativeCode = async () => basicCalculation(999)
console.log('Part 1:', await typescriptNativeCode())

// Part 2
export const offloadToWasm = async () => basic_calculation(999)
console.log('Part 2:', offloadToWasm())
