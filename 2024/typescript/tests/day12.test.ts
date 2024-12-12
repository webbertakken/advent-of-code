import Library from '../lib'
import { describe, test, vi, expect } from 'vitest'
import { getCombinedPrice, getDiscountedPrice } from '../day12'

describe('Day 12', async () => {
  describe('getCombinedPrice', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getCombinedPrice()).toEqual(772)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with second example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExample2Input)
      expect(getCombinedPrice()).toEqual(1930)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getCombinedPrice()).toEqual(1344578)
    })
  })

  describe('getDiscountedPrice', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getDiscountedPrice()).toEqual(436)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with second example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExample2Input)
      expect(getDiscountedPrice()).toEqual(1206)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getDiscountedPrice()).toEqual(814302)
    })
  })
})
