import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { wasmGetRevisedTotalCalibrationResult, wasmGetTotalCalibrationResult } from '../day07-wasm'

describe('Day 07', async () => {
  describe('wasmGetTotalCalibrationResult', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(wasmGetTotalCalibrationResult()).toEqual(3749)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(wasmGetTotalCalibrationResult()).toEqual(975671981569)
    })
  })

  describe('wasmGetRevisedTotalCalibrationResult', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(wasmGetRevisedTotalCalibrationResult()).toEqual(11387)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(wasmGetRevisedTotalCalibrationResult()).toEqual(223472064194845)
    })
  })
})
