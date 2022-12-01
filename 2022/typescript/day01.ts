import { getInput } from "./lib.ts";

const input = getInput("day01");

// Part 1
const groups = input.split("\n\n");
const totals = groups.map((group) =>
  group.split("\n").reduce((acc, number) => acc + Number(number), 0)
);
const max = Math.max(...totals)
console.log('Max:', max);

// Part 2
const topThreeTotals = totals.sort((a, b) => b - a).slice(0, 3);
const sumOfTopThree = topThreeTotals.reduce((acc, number) => acc + number, 0);
console.log('Sum of top three:', sumOfTopThree);
