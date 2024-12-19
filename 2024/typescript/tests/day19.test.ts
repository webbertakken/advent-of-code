import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { getNumberOfDesiredDesignsPossible, getNumberOfAllPossibleDesigns } from '../day19'

describe('Day 19', async () => {
  describe('getNumberOfDesiredDesignsPossible', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getNumberOfDesiredDesignsPossible()).toEqual(6)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getNumberOfDesiredDesignsPossible()).toEqual(363)
    })
  })

  describe('getNumberOfAllPossibleDesigns', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getNumberOfAllPossibleDesigns()).toEqual(16)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getNumberOfAllPossibleDesigns()).toEqual(642535800868438)
    })
  })
})
