import Library from '../lib'
import { describe, expect, test, vi } from 'vitest'
import { strategy1Score, strategy2Score } from '../day02'

describe('Day 2', async () => {
  describe('strategy1Score', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(strategy1Score()).toEqual(15)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(strategy1Score()).toEqual(12740)
    })
  })

  describe('strategy2Score', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(strategy2Score()).toEqual(12)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(strategy2Score()).toEqual(11980)
    })
  })
})
