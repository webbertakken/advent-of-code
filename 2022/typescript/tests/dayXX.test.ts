import Library from "../lib.ts";
import { describe, test, vi, expect } from "vitest";
import { part1, part2 } from "../dayXX.ts";

describe("Day XX", async (context) => {
  describe("part1", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("dayXX-example"));
      expect(part1()).toEqual(0);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      // expect(part1())  .toEqual(0)
    });
  });

  describe("part2", () => {
    test("works with example input", () => {
      // const getInput =  vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("dayXX-example"));
      // expect(part2())  .toEqual(0)
      // getInput.mockRestore();
    });

    test("works with real input", () => {
      // expect(part2())  .toEqual(0)
    });
  });
});
