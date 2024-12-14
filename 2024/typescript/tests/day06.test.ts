import Library from '../lib'
import { describe, it, vi, expect } from 'vitest'
import { getGuardsDistinctVisitedPositions, getPossiblePlacesForObstacles } from '../day06'

describe('Day 06', async () => {
  describe('getGuardsDistinctVisitedPositions', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getGuardsDistinctVisitedPositions()).toEqual(41)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getGuardsDistinctVisitedPositions()).toEqual(5086)
    })
  })

  describe('getPossiblePlacesForObstacles', () => {
    it('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getPossiblePlacesForObstacles()).toEqual(6)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    it('works with real input', () => {
      expect(getPossiblePlacesForObstacles()).toEqual(1770)
    })
  })
})
