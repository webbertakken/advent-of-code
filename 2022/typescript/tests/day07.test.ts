import Library from '../lib'
import { describe, expect, test, vi } from 'vitest'
import { getRecursiveSumOfDirsBelow100k, getSizeOfFolderToRemove } from '../day07'

describe('Day 7', async () => {
  describe('getRecursiveSumOfDirsBelow100k', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getRecursiveSumOfDirsBelow100k()).toEqual(95437)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getRecursiveSumOfDirsBelow100k()).toEqual(1391690)
    })
  })

  describe('getSizeOfFolderToRemove', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getSizeOfFolderToRemove()).toEqual(24933642)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getSizeOfFolderToRemove()).toEqual(5469168)
    })
  })
})
