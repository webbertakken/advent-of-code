import Library from '../lib'
import { describe, test, vi, expect } from 'vitest'
import { wasmGetRevisedTotalCalibrationResult, wasmGetTotalCalibrationResult } from '../day07-wasm'

describe('Day 07', async () => {
  describe('wasmGetTotalCalibrationResult', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(wasmGetTotalCalibrationResult()).toEqual(3749)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(wasmGetTotalCalibrationResult()).toEqual(975671981569)
    })
  })

  describe('wasmGetRevisedTotalCalibrationResult', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(wasmGetRevisedTotalCalibrationResult()).toEqual(11387)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(wasmGetRevisedTotalCalibrationResult()).toEqual(223472064194845)
    })
  })
})
