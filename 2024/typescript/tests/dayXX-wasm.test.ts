import { describe, test, expect } from 'vitest'
import { typescriptNativeCode, offloadToWasm } from '../dayXX-wasm'

describe('Day XX', async () => {
  describe('part1', () => {
    test('gives the right output', () => {
      expect(typescriptNativeCode()).resolves.toEqual(255744)
    })
  })

  describe('part2', () => {
    test('works with real input', () => {
      expect(offloadToWasm()).resolves.toEqual(255744)
    })
  })
})
