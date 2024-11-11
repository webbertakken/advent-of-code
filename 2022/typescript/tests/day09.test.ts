import Library from '../lib'
import { describe, expect, test, vi } from 'vitest'
import { getNinthTailVisitCount, getTailVisitedCount } from '../day09'

describe('Day 9', async () => {
  describe('getTailVisited', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getTailVisitedCount()).toEqual(13)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getTailVisitedCount()).toEqual(6098)
    })
  })

  describe('getNinthTailVisitCount', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getNinthTailVisitCount()).toEqual(1)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getNinthTailVisitCount()).toEqual(2597)
    })
  })
})
