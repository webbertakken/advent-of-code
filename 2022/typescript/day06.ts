import Library from "./lib.ts";

const getNonConsecutiveChars = (amount: number) => {
  const input = Library.getInput("day06");
  for (let i = amount - 1; i < input.length; i++) {
    if (new Set(input.slice(i - amount, i)).size === amount) return i;
  }

  throw new Error("No four non-consecutive characters found");
};

// Part 1
export const getFourNonConsecutiveChars = () => getNonConsecutiveChars(4);
console.log("start-of-packet marker:", getFourNonConsecutiveChars());

// Part 2
export const getFourteenNonConsecutiveChars = () => getNonConsecutiveChars(14);
console.log("start-of-message marker:", getFourteenNonConsecutiveChars());
