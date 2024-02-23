import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { getRecursiveSumOfDirsBelow100k, getSizeOfFolderToRemove } from "../day07.ts";

describe("Day 7", async (context) => {
  describe("getRecursiveSumOfDirsBelow100k", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day07-example"));
      expect(getRecursiveSumOfDirsBelow100k()).toEqual(95437);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(getRecursiveSumOfDirsBelow100k()).toEqual(1391690);
    });
  });

  describe("getSizeOfFolderToRemove", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day07-example"));
      expect(getSizeOfFolderToRemove()).toEqual(24933642);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(getSizeOfFolderToRemove()).toEqual(5469168);
    });
  });
});
