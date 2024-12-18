import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { getProgramStringOutput, findInstructionFixedPoint } from '../day17'

describe('Day 17', async () => {
  describe('part1', () => {
    it('works with example 1', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getProgramStringOutput()).toEqual('4,6,3,5,6,3,5,2,1,0')
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with example 2', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExample2Input)
      expect(getProgramStringOutput()).toEqual('5,7,3,0')
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getProgramStringOutput()).toEqual('1,5,0,1,7,4,1,0,3')
    })
  })

  describe('part2', () => {
    it('works with example 1', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(findInstructionFixedPoint()).toEqual(-1)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with example 2', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExample2Input)
      expect(findInstructionFixedPoint()).toEqual(117440)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(findInstructionFixedPoint()).toEqual(47910079998866)
    })
  })
})
