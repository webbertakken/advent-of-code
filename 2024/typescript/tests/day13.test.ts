import Library from '../lib'
import { describe, test, it, vi, expect } from 'vitest'
import { getMinimumCostToWinThePrize, getMinimumTokenCost, getMinimumTokenCostAfterAddingTenTrillion } from '../day13'

describe('Day 13', async () => {
  describe('Calculations', () => {
    test('works with example 1', () => {
      const machine = { aX: 94, aY: 34, bX: 22, bY: 67, prizeX: 8400, prizeY: 5400 }
      expect(getMinimumCostToWinThePrize(machine)).toEqual(280)
    })

    test('works with example 2', () => {
      const machine = { aX: 26, aY: 66, bX: 67, bY: 21, prizeX: 12748, prizeY: 12176 }
      expect(getMinimumCostToWinThePrize(machine)).toEqual(0)
    })

    test('works with example 3', () => {
      const machine = { aX: 17, aY: 86, bX: 84, bY: 37, prizeX: 7870, prizeY: 6450 }
      expect(getMinimumCostToWinThePrize(machine)).toEqual(200)
    })

    test('works with example 4', () => {
      const machine = { aX: 69, aY: 23, bX: 27, bY: 71, prizeX: 18641, prizeY: 10279 }
      expect(getMinimumCostToWinThePrize(machine)).toEqual(0)
    })

    it('works with equal costs, only one button needed', () => {
      // This is a tricky one for Cramer's rule (only need 1 button)
      const machine = { aX: 9, aY: 3, bX: 3, bY: 1, prizeX: 27, prizeY: 9 }
      expect(getMinimumCostToWinThePrize(machine)).toEqual(9)
    })

    it('works with equal costs, incorrect bX', () => {
      const machine = { aX: 9, aY: 3, bX: 4, bY: 1, prizeX: 27, prizeY: 9 }
      expect(getMinimumCostToWinThePrize(machine)).toEqual(9)
    })

    it('works with equal costs, incorrect bY', () => {
      const machine = { aX: 9, aY: 3, bX: 3, bY: 2, prizeX: 27, prizeY: 9 }
      expect(getMinimumCostToWinThePrize(machine)).toEqual(9)
    })

    it('considers unusable value A when sqrt(A) is greater than sqrt(B)', () => {
      // This is a tricky one, because the sqrt(A) is greater than sqrt(B)
      const machine = { aX: 10, aY: 3, bX: 3, bY: 1, prizeX: 27, prizeY: 9 }
      expect(getMinimumCostToWinThePrize(machine)).toEqual(9)
    })

    it('works with equal costs, incorrect aY', () => {
      const machine = { aX: 9, aY: 9, bX: 3, bY: 1, prizeX: 27, prizeY: 9 }
      expect(getMinimumCostToWinThePrize(machine)).toEqual(9)
    })

    it('handles case where modulus is 0, steps for X and Y are different', () => {
      // Case where prizeX % aX === 0 and prizeY % aY === 0, but prizeX/aX !== prizeY/aY:
      const machine = { aX: 35, aY: 76, bX: 58, bY: 18, prizeX: 8521, prizeY: 13664 }
      expect(getMinimumCostToWinThePrize(machine)).toEqual(0)
    })
  })

  describe('getMinimumTokenCost', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getMinimumTokenCost()).toEqual(489)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getMinimumTokenCost()).toEqual(29438)
    })
  })

  describe('getMinimumTokenCostAfterAddingTenTrillion', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getMinimumTokenCostAfterAddingTenTrillion()).toEqual(875318608908)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getMinimumTokenCostAfterAddingTenTrillion()).toEqual(104958599303720)
    })
  })
})
