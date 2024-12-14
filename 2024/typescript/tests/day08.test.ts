import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { getNumberOfAntiNodes, getNumberOfAllAntiNodes } from '../day08'

describe('Day 08', async () => {
  describe('getNumberOfAntiNodes', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getNumberOfAntiNodes()).toEqual(14)
      // expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getNumberOfAntiNodes()).toEqual(240)
    })
  })

  describe('getNumberOfAllAntiNodes', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getNumberOfAllAntiNodes()).toEqual(34)
      //   expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getNumberOfAllAntiNodes()).toEqual(955)
    })
  })
})
