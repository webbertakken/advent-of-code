import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { getStonesAfterBlinking25Times, getStonesAfterBlinking75Times } from '../day11'

describe('Day 11', async () => {
  describe('getStonesAfterBlinking25Times', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getStonesAfterBlinking25Times()).toEqual(55312)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getStonesAfterBlinking25Times()).toEqual(177841)
    })
  })

  describe('getStonesAfterBlinking75Times', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getStonesAfterBlinking75Times()).toEqual(65601038650482)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getStonesAfterBlinking75Times()).toEqual(210988100492977)
    })
  })
})
