import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { getSumOfMiddlePageNumbersFromCorrectUpdates, getSumOfMiddlePageNumbersFromIncorrectUpdates } from '../day05'

describe('Day 05', async () => {
  describe('getSumOfMiddlePageNumbersFromCorrectUpdates', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getSumOfMiddlePageNumbersFromCorrectUpdates()).toEqual(143)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getSumOfMiddlePageNumbersFromCorrectUpdates()).toEqual(4637)
    })
  })

  describe('getSumOfMiddlePageNumbersFromIncorrectUpdates', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getSumOfMiddlePageNumbersFromIncorrectUpdates()).toEqual(123)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getSumOfMiddlePageNumbersFromIncorrectUpdates()).toEqual(6370)
    })
  })
})
