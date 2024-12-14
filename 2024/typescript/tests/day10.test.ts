import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { getCombinedTrailheadScores, getCombinedNumberOfTrails } from '../day10'

describe('Day 10', async () => {
  describe('getCombinedTrailheadScores', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getCombinedTrailheadScores()).toEqual(36)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getCombinedTrailheadScores()).toEqual(674)
    })
  })

  describe('getCombinedNumberOfTrails', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getCombinedNumberOfTrails()).toEqual(81)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getCombinedNumberOfTrails()).toEqual(1372)
    })
  })
})
