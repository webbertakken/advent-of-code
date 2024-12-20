import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { part1, part2 } from '../day20'

describe('Day 20', async () => {
  describe('part1', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(part1()).toEqual(0)
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
