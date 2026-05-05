import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { part1, part2 } from '../day20'

describe('Day 20', async () => {
  describe('part1', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(part1()).toEqual(140)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    // Pending until the real-input solver is implemented.
    it.todo('works with real input')
  })

  describe('part2', () => {
    // Both pending until part2 is implemented.
    it.todo('works with example input')
    it.todo('works with real input')
  })
})
