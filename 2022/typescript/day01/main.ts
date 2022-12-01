import { input } from "./input.ts";

// Part 1
const groups = input.split("\n\n");
const totals = groups.map((group) =>
  group.split("\n").reduce((acc, number) => acc + Number(number), 0)
);
console.log(Math.max(...totals));

// Part 2
const topThreeTotals = totals.sort((a, b) => b - a).slice(0, 3);
console.log(topThreeTotals.reduce((acc, number) => acc + number, 0));
