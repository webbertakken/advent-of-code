import Library from "./lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { getNinthTailVisitCount, getTailVisitedCount } from "./day09.ts";

Deno.test("Day 9", async (context) => {
  await context.step("getTailVisited", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day09-example"));
      assertEquals(getTailVisitedCount(), 13);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(getTailVisitedCount(), 6098);
    });
  });

  await context.step("getNinthTailVisitCount", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day09-example"));
      assertEquals(getNinthTailVisitCount(), 1);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(getNinthTailVisitCount(), 2597);
    });
  });
});
