import Library from "./lib.ts";

const input = Library.getInput("day02");

enum Shape {
  rock = 1,
  paper,
  scissors,
}

enum Outcome {
  win,
  draw,
  loss,
}

const shapeMap: { [key: string]: Shape } = {
  A: Shape.rock,
  B: Shape.paper,
  C: Shape.scissors,
  X: Shape.rock,
  Y: Shape.paper,
  Z: Shape.scissors,
};

const outcomeMap: { [key: string]: Outcome } = {
  X: Outcome.loss,
  Y: Outcome.draw,
  Z: Outcome.win,
};

const shapeForOutcomeMap = {
  [Shape.rock]: {
    [Outcome.win]: Shape.paper,
    [Outcome.draw]: Shape.rock,
    [Outcome.loss]: Shape.scissors,
  },
  [Shape.paper]: {
    [Outcome.win]: Shape.scissors,
    [Outcome.draw]: Shape.paper,
    [Outcome.loss]: Shape.rock,
  },
  [Shape.scissors]: {
    [Outcome.win]: Shape.rock,
    [Outcome.draw]: Shape.scissors,
    [Outcome.loss]: Shape.paper,
  },
};

const rockPaperScissors = (player: Shape, opponent: Shape): number => {
  let score = Number(player);

  if (player === opponent) {
    score += 3;
  } else if (player === shapeForOutcomeMap[opponent][Outcome.win]) {
    score += 6;
  }

  return score;
};

const rounds = input.split("\n");

// Part 1
let score = 0;
for (const round of rounds) {
  const [opponent, player] = round.split(" ");
  score += rockPaperScissors(shapeMap[player], shapeMap[opponent]);
}
console.log("Strategy 1 score:", score);

// Part 2
let score2 = 0;
for (const round of rounds) {
  const [input1, input2] = round.split(" ");
  const opponent = shapeMap[input1];
  const player = shapeForOutcomeMap[opponent][outcomeMap[input2]];
  score2 += rockPaperScissors(player, opponent);
}
console.log("Strategy 2 score:", score2);
