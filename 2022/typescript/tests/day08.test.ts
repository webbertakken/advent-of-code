import Library from '../lib'
import { describe, expect, test, vi } from 'vitest'
import { getHighestViewScore, getVisibleTrees } from '../day08'

describe('Day 8', async () => {
  describe('getVisibleTrees', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getVisibleTrees()).toEqual(21)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getVisibleTrees()).toEqual(1647)
    })
  })

  describe('getHighestViewScore', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getHighestViewScore()).toEqual(8)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getHighestViewScore()).toEqual(392080)
    })
  })
})
