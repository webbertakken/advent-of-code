import Library from '../lib'
import { describe, expect, test, vi } from 'vitest'
import { badgesSum, prioritySum } from '../day03'

describe('Day 3', async () => {
  describe('prioritySum', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(prioritySum()).toEqual(157)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(prioritySum()).toEqual(8153)
    })
  })

  describe('badgesSum', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(badgesSum()).toEqual(70)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(badgesSum()).toEqual(2342)
    })
  })
})
