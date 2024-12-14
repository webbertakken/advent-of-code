import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { getXmasCount, getCrossedMasCount } from '../day04'

describe('Day 04', async () => {
  describe('part1', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getXmasCount()).toEqual(18)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getXmasCount()).toEqual(2536)
    })
  })

  describe('part2', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExample2Input)
      expect(getCrossedMasCount()).toEqual(9)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getCrossedMasCount()).toEqual(1875)
    })
  })
})
