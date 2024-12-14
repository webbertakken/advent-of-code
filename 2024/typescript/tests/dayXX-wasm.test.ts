import { describe, it, expect } from 'vitest'
import { typescriptNativeCode, offloadToWasm } from '../dayXX-wasm'

describe('Day XX', async () => {
  describe('part1', () => {
    it('gives the right output', () => {
      expect(typescriptNativeCode()).resolves.toEqual(255744)
    })
  })

  describe('part2', () => {
    it('works with real input', () => {
      expect(offloadToWasm()).resolves.toEqual(255744)
    })
  })
})
