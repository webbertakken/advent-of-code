import Library from "../lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { strategy1Score, strategy2Score } from "../day02.ts";

Deno.test("Day 2", async (context) => {
  await context.step("strategy1Score", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day02-example"));
      assertEquals(strategy1Score(), 15);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(strategy1Score(), 12740);
    });
  });

  await context.step("strategy2Score", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day02-example"));
      assertEquals(strategy2Score(), 12);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(strategy2Score(), 11980);
    });
  });
});
