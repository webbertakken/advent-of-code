import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { executionSequence, decodedLettersAsImage, sumOfSixSignalStrengths } from "../day10.ts";

describe("Day 10", async (context) => {
  describe("iterator", () => {
    test("results in the right number", () => {
      // Arrange
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(`noop\naddx 3\naddx -5`);
      const iterator = executionSequence();

      // Act
      let x;
      while (true) {
        const { value, done } = iterator.next();
        if (done) break;
        x = value;
      }

      // Assert
      expect(x).toEqual(-1);
      getInput.mockRestore();
    });
  });

  describe("sumOfSixSignalStrenths", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day10-example"));
      expect(sumOfSixSignalStrengths()).toEqual(13140);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(sumOfSixSignalStrengths()).toEqual(14220);
    });
  });

  describe("decodedLettersAsImage", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day10-example"));
      expect(decodedLettersAsImage()).toEqual(
        [
          "",
          "##..##..##..##..##..##..##..##..##..##..",
          "###...###...###...###...###...###...###.",
          "####....####....####....####....####....",
          "#####.....#####.....#####.....#####.....",
          "######......######......######......####",
          "#######.......#######.......#######.....",
        ].join("\n"),
      );
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(decodedLettersAsImage()).toEqual(
        [
          "",
          "####.###...##..###..#....####.####.#..#.",
          "...#.#..#.#..#.#..#.#....#.......#.#..#.",
          "..#..#..#.#..#.#..#.#....###....#..#..#.",
          ".#...###..####.###..#....#.....#...#..#.",
          "#....#.#..#..#.#.#..#....#....#....#..#.",
          "####.#..#.#..#.#..#.####.#....####..##..",
        ].join("\n"),
      );
    });
  });
});
