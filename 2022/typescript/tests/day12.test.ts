import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { fewestStepsRequired, fewestStepsRequiredFromAnyA /* part2 */ } from "../day12.ts";

describe("Day 12", async (context) => {
  describe("part1", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day12-example"));
      expect(fewestStepsRequired()).toEqual(31);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(fewestStepsRequired()).toEqual(483);
    });
  });

  describe("fewestStepsRequiredFromAnyA", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day12-example"));
      expect(fewestStepsRequiredFromAnyA()).toEqual(30);
      getInput.mockRestore();
    });
    test("works with real input", () => {
      expect(fewestStepsRequiredFromAnyA()).toEqual(482);
    });
  });
});
