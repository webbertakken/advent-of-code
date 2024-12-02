import Library from '../lib'
import { describe, test, vi, expect } from 'vitest'
import { analyseNumberOfSafeStrangeReports, analiseSafetyAfterAfterProblemDampener } from '../day02'

describe('Day 02', async () => {
  describe('analyseSafeNumberOfStrangeReports', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(analyseNumberOfSafeStrangeReports()).toEqual(2)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(analyseNumberOfSafeStrangeReports()).toEqual(631)
    })
  })

  describe('analiseSafetyAfterAfterProblemDampener', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(analiseSafetyAfterAfterProblemDampener()).toEqual(4)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(analiseSafetyAfterAfterProblemDampener()).toEqual(665)
    })
  })
})
