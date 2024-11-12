import Library from '../lib'
import { describe, test, vi, expect } from 'vitest'
import { simpleCalibrationValues, correctedCalibrationValues } from '../day01'

describe('Day 01', async () => {
  describe('part1', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(simpleCalibrationValues()).toEqual(142)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(simpleCalibrationValues()).toEqual(55090)
    })
  })

  describe('part2', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExample2Input)
      expect(correctedCalibrationValues()).toEqual(281)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(correctedCalibrationValues()).toEqual(54845)
    })
  })
})
