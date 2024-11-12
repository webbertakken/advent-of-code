import Library from '../lib'
import { describe, test, vi, expect } from 'vitest'
import { part1, part2 } from '../dayXX'

describe('Day XX', async () => {
  describe('part1', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(part1()).toEqual(0)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      // expect(part1())  .toEqual(0)
    })
  })

  describe('part2', () => {
    test('works with example input', () => {
      // const getInput = vi.spyOn(Library, "getInput").mockImplementation(Library.getExampleInput)
      // expect(part2()).toEqual(0)
      // expect(getInput).toHaveBeenCalledTimes(1)
      // getInput.mockRestore()
    })

    test('works with real input', () => {
      // expect(part2()).toEqual(0)
    })
  })
})
