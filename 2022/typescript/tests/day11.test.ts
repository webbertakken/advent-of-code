import Library from '../lib'
import { describe, expect, test, vi } from 'vitest'
import { monkeyBusinessLevelAfter10k, monkeyBusinessLevelAfter20 } from '../day11'

describe('Day 11', async () => {
  describe('monkeyBusinessLevelAfter20', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(monkeyBusinessLevelAfter20()).toEqual(10605)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(monkeyBusinessLevelAfter20()).toEqual(50616)
    })
  })

  describe('monkeyBusinessLevelAfter10k', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(monkeyBusinessLevelAfter10k()).toEqual(2713310158)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(monkeyBusinessLevelAfter10k()).toEqual(11309046332)
    })
  })
})
