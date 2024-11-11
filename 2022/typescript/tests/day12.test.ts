import Library from '../lib'
import { describe, expect, test, vi } from 'vitest'
import { fewestStepsRequired, fewestStepsRequiredFromAnyA /* part2 */ } from '../day12'

describe('Day 12', async () => {
  describe('part1', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(fewestStepsRequired()).toEqual(31)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(fewestStepsRequired()).toEqual(483)
    })
  })

  describe('fewestStepsRequiredFromAnyA', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(fewestStepsRequiredFromAnyA()).toEqual(30)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })
    test('works with real input', () => {
      expect(fewestStepsRequiredFromAnyA()).toEqual(482)
    })
  })
})
