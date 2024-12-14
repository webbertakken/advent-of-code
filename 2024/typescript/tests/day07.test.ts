import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { getTotalCalibrationResult, getRevisedTotalCalibrationResult } from '../day07'

describe('Day 07', async () => {
  describe('getTotalCalibrationResult', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getTotalCalibrationResult()).toEqual(3749)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getTotalCalibrationResult()).toEqual(975671981569)
    })
  })

  describe('getRevisedTotalCalibrationResult', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getRevisedTotalCalibrationResult()).toEqual(11387)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getRevisedTotalCalibrationResult()).toEqual(223472064194845)
    })
  })
})
