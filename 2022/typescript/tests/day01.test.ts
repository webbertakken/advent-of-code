import Library from '../lib'
import { describe, expect, test, vi } from 'vitest'
import { highestTotal, sumOfTopThree } from '../day01'

describe('Day 1', async () => {
  describe('highestTotal', async () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(highestTotal()).toEqual(24000)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(highestTotal()).toEqual(69206)
    })
  })

  describe('sumOfTopThree', async () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(sumOfTopThree()).toEqual(45000)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(sumOfTopThree()).toEqual(197400)
    })
  })
})
