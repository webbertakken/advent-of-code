import Library from '../lib'
import { describe, expect, test, vi } from 'vitest'
import { getNumberOfCompleteOverlaps, getNumberOfPartialOverlaps } from '../day04'

describe('Day 4', () => {
  describe('getNumberOfCompleteOverlaps', () => {
    test('returns the right number for test data', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getNumberOfCompleteOverlaps()).toEqual(2)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('returns the right number for real data', () => {
      expect(getNumberOfCompleteOverlaps()).toEqual(556)
    })
  })

  describe('getNumberOfPartialOverlaps', () => {
    test('returns the right number for test data', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getNumberOfPartialOverlaps()).toEqual(4)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('returns the right number for real data', () => {
      expect(getNumberOfPartialOverlaps()).toEqual(876)
    })
  })
})
