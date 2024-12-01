import Library from '../lib'
import { describe, test, vi, expect } from 'vitest'
import { getTotalDistanceBetweenPairs, getTotalSimilarityScore } from '../day01'

describe('Day 01', async () => {
  describe('getTotalDistanceBetweenPairs', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getTotalDistanceBetweenPairs()).toEqual(11)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getTotalDistanceBetweenPairs()).toEqual(1590491)
    })
  })

  describe('getTotalSimilarityScore', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getTotalSimilarityScore()).toEqual(31)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getTotalSimilarityScore()).toEqual(22588371)
    })
  })
})
