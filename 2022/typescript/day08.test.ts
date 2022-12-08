import Library from "./lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { getHighestViewScore, getVisibleTrees } from "./day08.ts";

Deno.test("Day 8", async (context) => {
  await context.step("getVisibleTrees", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day08-example"));
      assertEquals(getVisibleTrees(), 21);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(getVisibleTrees(), 1647);
    });
  });

  await context.step("getHighestViewScore", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day08-example"));
      assertEquals(getHighestViewScore(), 8);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(getHighestViewScore(), 392080);
    });
  });
});
