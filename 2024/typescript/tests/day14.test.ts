import Library from '../lib'
import { describe, vi, it, expect } from 'vitest'
import { getSafetyFactorAfter100Seconds, getNumberOfSecondsForEasterEgg } from '../day14'

describe('Day 14', async () => {
  describe('part1', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getSafetyFactorAfter100Seconds()).toEqual(21)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getSafetyFactorAfter100Seconds()).toEqual(226179492)
    })
  })

  describe('part2', () => {
    it('shows the number of seconds when all robots align', () => {
      expect(getNumberOfSecondsForEasterEgg()).toEqual(7502)
    })
  })
})
