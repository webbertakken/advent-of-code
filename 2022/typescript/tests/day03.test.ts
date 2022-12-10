import Library from "../lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { badgesSum, prioritySum } from "../day03.ts";

Deno.test("Day 3", async (context) => {
  await context.step("prioritySum", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day03-example"));
      assertEquals(prioritySum(), 157);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(prioritySum(), 8153);
    });
  });

  await context.step("badgesSum", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day03-example"));
      assertEquals(badgesSum(), 70);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(badgesSum(), 2342);
    });
  });
});
