import Library from "../lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { monkeyBusinessLevelAfter10k, monkeyBusinessLevelAfter20 } from "../day11.ts";

Deno.test("Day 11", async (context) => {
  await context.step("monkeyBusinessLevelAfter20", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day11-example"));
      assertEquals(monkeyBusinessLevelAfter20(), 10605);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(monkeyBusinessLevelAfter20(), 50616);
    });
  });

  await context.step("monkeyBusinessLevelAfter10k", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day11-example"));
      assertEquals(monkeyBusinessLevelAfter10k(), 2713310158);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(monkeyBusinessLevelAfter10k(), 11309046332);
    });
  });
});
