import Library from '../lib'
import { describe, expect, test, vi } from 'vitest'
import { sumOfIndicesOfCorrectPairs, decoderKeyForDistressSignal } from '../day13'

describe('Day 13', async () => {
  describe('sumOfIndicesOfCorrectPairs', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(sumOfIndicesOfCorrectPairs()).toEqual(13)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(sumOfIndicesOfCorrectPairs()).toEqual(5905)
    })
  })

  describe('decoderKeyForDistressSignal', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(decoderKeyForDistressSignal()).toEqual(140)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(decoderKeyForDistressSignal()).toEqual(21691)
    })
  })
})
