import Library from '../lib'
import { describe, test, vi, expect } from 'vitest'
import { getGuardsDistinctVisitedPositions, getPossiblePlacesForObstacles } from '../day06'

describe('Day 06', async () => {
  describe('part1', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(getGuardsDistinctVisitedPositions()).toEqual(41)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(getGuardsDistinctVisitedPositions()).toEqual(5086)
    })
  })

  describe('part2', () => {
    test('works with example input', () => {
      // const getInput = vi.spyOn(Library, "getInput").mockImplementation(Library.getExampleInput)
      // expect(part2()).toEqual(0)
      // expect(getInput).toHaveBeenCalledTimes(1)
      // getInput.mockRestore()
    })

    test('works with real input', () => {
      // expect(part2()).toEqual(0)
    })
  })
})
