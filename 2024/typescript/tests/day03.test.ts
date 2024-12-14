import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { getSumOfAllInstructions, getSumOfEnabledInstructions } from '../day03'

describe('Day 03', async () => {
  describe('part1', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getSumOfAllInstructions()).toEqual(161)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getSumOfAllInstructions()).toEqual(161085926)
    })
  })

  describe('part2', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExample2Input)
      expect(getSumOfEnabledInstructions()).toEqual(48)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getSumOfEnabledInstructions()).toEqual(82045421)
    })
  })
})
