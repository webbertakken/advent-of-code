import Library from "./lib.ts";

const getNonConsecutiveChars = (amount: number) => {
  const input = Library.getInput("day06");
  for (let i = amount; i < input.length; i++) {
    const chars = input.slice(i - amount, i).split("");
    if (!chars.some((c) => chars.filter((c2) => c2 === c).length >= 2)) return i;
  }

  throw new Error("No four non-consecutive characters found");
};

// Part 1
export const getFourNonConsecutiveChars = () => getNonConsecutiveChars(4);
console.log("start-of-packet marker:", getFourNonConsecutiveChars());

// Part 2
export const getFourteenNonConsecutiveChars = () => getNonConsecutiveChars(14);
console.log("start-of-message marker:", getFourteenNonConsecutiveChars());
