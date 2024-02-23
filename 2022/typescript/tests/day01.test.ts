import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { highestTotal, sumOfTopThree } from "../day01.ts";

describe("Day 1", async (context) => {
  describe("highestTotal", async () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day01-example"));
      expect(highestTotal()).toEqual(24000);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(highestTotal()).toEqual(69206);
    });
  });

  describe("sumOfTopThree", async () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day01-example"));
      expect(sumOfTopThree()).toEqual(45000);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(sumOfTopThree()).toEqual(197400);
    });
  });
});
