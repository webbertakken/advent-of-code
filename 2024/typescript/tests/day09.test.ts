import Library from '../lib'
import { describe, test, vi, expect } from 'vitest'
import { getChecksumAfterDefragmentingPerBit, getChecksumAfterDefragmentingPerFile } from '../day09'

describe('Day 09', async () => {
  describe('getChecksumAfterDefragmentingPerBit', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getChecksumAfterDefragmentingPerBit()).toEqual(1928)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getChecksumAfterDefragmentingPerBit()).toEqual(6241633730082)
    })
  })

  describe('getChecksumAfterDefragmentingPerFile', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getChecksumAfterDefragmentingPerFile()).toEqual(2858)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getChecksumAfterDefragmentingPerFile()).toEqual(6265268809555)
    })
  })
})
