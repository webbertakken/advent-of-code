import Library from "./lib.ts";

const getRounds = () => Library.getInput("day02").split("\n");

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

// Part 1
export const strategy1Score = (): number => {
  let score = 0;
  for (const round of getRounds()) {
    const [opponent, player] = round.split(" ");
    score += rockPaperScissors(shapeMap[player], shapeMap[opponent]);
  }
  return score;
};
console.log("Strategy 1 score:", strategy1Score());

// Part 2
export const strategy2Score = (): number => {
  let score = 0;
  for (const round of getRounds()) {
    const [input1, input2] = round.split(" ");
    const opponent = shapeMap[input1];
    const player = shapeForOutcomeMap[opponent][outcomeMap[input2]];
    score += rockPaperScissors(player, opponent);
  }
  return score;
};
console.log("Strategy 2 score:", strategy2Score());
