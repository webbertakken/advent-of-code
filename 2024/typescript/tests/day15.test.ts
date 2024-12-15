import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { warehouseOne, warehouseTwo } from '../day15'

describe('Day 15', async () => {
  describe('warehouseOne', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(warehouseOne()).toEqual(2028)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with example 2 input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExample2Input)
      expect(warehouseOne()).toEqual(10092)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(warehouseOne()).toEqual(1559280)
    })
  })

  describe('warehouseTwo', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(warehouseTwo()).toEqual(1751)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(warehouseTwo()).toEqual(1576353)
    })
  })
})
