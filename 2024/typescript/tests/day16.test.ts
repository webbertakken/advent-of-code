import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { part1, part2 } from '../day16'

describe('Day 16', async () => {
  describe('part1', () => {
    it('works with example 1', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(part1()).toEqual(7036)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with example 2', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExample2Input)
      expect(part1()).toEqual(11048)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      // expect(part1()).toEqual(0)
    })
  })

  describe('part2', () => {
    it('works with example input', () => {
      // const getInput = vi.spyOn(Library, "getInput").mockImplementation(Library.getExampleInput)
      // expect(part2()).toEqual(0)
      // expect(getInput).toHaveBeenCalledTimes(1)
      // getInput.mockRestore()
    })

    it('works with real input', () => {
      // expect(part2()).toEqual(0)
    })
  })
})
