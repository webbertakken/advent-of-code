import Library from '../lib'
import { describe, expect, test, vi } from 'vitest'
import { topOfStacksUsingMover9000, topOfStacksUsingMover9001 } from '../day05'

describe('Day 5', async () => {
  describe('topOfStacksUsingMover9000', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(topOfStacksUsingMover9000()).toEqual('CMZ')
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(topOfStacksUsingMover9000()).toEqual('RFFFWBPNS')
    })
  })

  describe('topOfStacksUsingMover9001', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(topOfStacksUsingMover9001()).toEqual('MCD')
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(topOfStacksUsingMover9001()).toEqual('CQQBBJFCS')
    })
  })
})
