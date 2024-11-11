import Library from '../lib'
import { describe, expect, test, vi } from 'vitest'
import { executionSequence, decodedLettersAsImage, sumOfSixSignalStrengths } from '../day10'

describe('Day 10', async () => {
  describe('iterator', () => {
    test('results in the right number', () => {
      // Arrange
      const getInput = vi.spyOn(Library, 'getInput').mockReturnValue(`noop\naddx 3\naddx -5`)
      const iterator = executionSequence()

      // Act
      let x
      while (true) {
        const { value, done } = iterator.next()
        if (done) break
        x = value
      }

      // Assert
      expect(x).toEqual(-1)
      getInput.mockRestore()
    })
  })

  describe('sumOfSixSignalStrenths', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(sumOfSixSignalStrengths()).toEqual(13140)
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(sumOfSixSignalStrengths()).toEqual(14220)
    })
  })

  describe('decodedLettersAsImage', () => {
    test('works with example input', () => {
      const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExampleInput)
      expect(decodedLettersAsImage()).toEqual(
        [
          '',
          '##..##..##..##..##..##..##..##..##..##..',
          '###...###...###...###...###...###...###.',
          '####....####....####....####....####....',
          '#####.....#####.....#####.....#####.....',
          '######......######......######......####',
          '#######.......#######.......#######.....',
        ].join('\n'),
      )
      expect(getInput).toHaveBeenCalledTimes(1)
      getInput.mockRestore()
    })

    test('works with real input', () => {
      expect(decodedLettersAsImage()).toEqual(
        [
          '',
          '####.###...##..###..#....####.####.#..#.',
          '...#.#..#.#..#.#..#.#....#.......#.#..#.',
          '..#..#..#.#..#.#..#.#....###....#..#..#.',
          '.#...###..####.###..#....#.....#...#..#.',
          '#....#.#..#..#.#.#..#....#....#....#..#.',
          '####.#..#.#..#.#..#.####.#....####..##..',
        ].join('\n'),
      )
    })
  })
})
