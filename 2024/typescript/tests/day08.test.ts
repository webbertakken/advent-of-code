import Library from '../lib'
import { describe, test, vi, expect } from 'vitest'
import { getNumberOfAntiNodes, getNumberOfAllAntiNodes } from '../day08'

describe('Day 08', async () => {
  describe('getNumberOfAntiNodes', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getNumberOfAntiNodes()).toEqual(14)
      // expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getNumberOfAntiNodes()).toEqual(240)
    })
  })

  describe('getNumberOfAllAntiNodes', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getNumberOfAllAntiNodes()).toEqual(34)
      //   expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getNumberOfAllAntiNodes()).toEqual(955)
    })
  })
})
