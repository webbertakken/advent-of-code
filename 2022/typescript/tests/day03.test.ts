import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { badgesSum, prioritySum } from "../day03.ts";

describe("Day 3", async (context) => {
  describe("prioritySum", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day03-example"));
      expect(prioritySum()).toEqual(157);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(prioritySum()).toEqual(8153);
    });
  });

  describe("badgesSum", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day03-example"));
      expect(badgesSum()).toEqual(70);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(badgesSum()).toEqual(2342);
    });
  });
});
