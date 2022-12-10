import Library from "../lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { highestTotal, sumOfTopThree } from "../day01.ts";

Deno.test("Day 1", async (context) => {
  await context.step("highestTotal", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day01-example"));
      assertEquals(highestTotal(), 24000);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(highestTotal(), 69206);
    });
  });

  await context.step("sumOfTopThree", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day01-example"));
      assertEquals(sumOfTopThree(), 45000);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(sumOfTopThree(), 197400);
    });
  });
});
