import Library from "../lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { getRecursiveSumOfDirsBelow100k, getSizeOfFolderToRemove } from "../day07.ts";

Deno.test("Day 7", async (context) => {
  await context.step("getRecursiveSumOfDirsBelow100k", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day07-example"));
      assertEquals(getRecursiveSumOfDirsBelow100k(), 95437);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(getRecursiveSumOfDirsBelow100k(), 1391690);
    });
  });

  await context.step("getSizeOfFolderToRemove", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day07-example"));
      assertEquals(getSizeOfFolderToRemove(), 24933642);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(getSizeOfFolderToRemove(), 5469168);
    });
  });
});
