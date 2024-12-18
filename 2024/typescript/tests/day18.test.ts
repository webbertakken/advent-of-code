import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { getShortestPathAfterBytesHaveFallen, getByteThatClosesThePath } from '../day18'

describe('Day 18', async () => {
  describe('getShortestPathAfterBytesHaveFallen', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getShortestPathAfterBytesHaveFallen()).toEqual(22)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getShortestPathAfterBytesHaveFallen()).toEqual(416)
    })
  })

  describe('getByteThatClosesThePath', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getByteThatClosesThePath()).toEqual('1,0')
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getByteThatClosesThePath()).toEqual('50,23')
    })
  })
})
