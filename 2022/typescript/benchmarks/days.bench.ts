import Lib from "../lib.ts";
import { highestTotal, sumOfTopThree } from "../day01.ts";
import { strategy1Score, strategy2Score } from "../day02.ts";
import { badgesSum, prioritySum } from "../day03.ts";
import { getNumberOfCompleteOverlaps, getNumberOfPartialOverlaps } from "../day04.ts";
import { topOfStacksUsingMover9000, topOfStacksUsingMover9001 } from "../day05.ts";
import { getFourNonConsecutiveChars, getFourteenNonConsecutiveChars } from "../day06.ts";
import { getRecursiveSumOfDirsBelow100k, getSizeOfFolderToRemove } from "../day07.ts";
import { getHighestViewScore, getVisibleTrees } from "../day08.ts";
import { getNinthTailVisitCount, getTailVisitedCount } from "../day09.ts";
import { decodedLettersAsImage, sumOfSixSignalStrengths } from "../day10.ts";
import { monkeyBusinessLevelAfter20, monkeyBusinessLevelAfter10k } from "../day11.ts";

Lib.bench({ name: "day01 - part 1", fn: highestTotal });
Lib.bench({ name: "day01 - part 2", fn: sumOfTopThree });

Lib.bench({ name: "day02 - part 1", fn: strategy1Score });
Lib.bench({ name: "day02 - part 2", fn: strategy2Score });

Lib.bench({ name: "day03 - part 1", fn: prioritySum });
Lib.bench({ name: "day03 - part 2", fn: badgesSum });

Lib.bench({ name: "day04 - part 1", fn: getNumberOfCompleteOverlaps });
Lib.bench({ name: "day04 - part 2", fn: getNumberOfPartialOverlaps });

Lib.bench({ name: "day05 - part 1", fn: topOfStacksUsingMover9000 });
Lib.bench({ name: "day05 - part 2", fn: topOfStacksUsingMover9001 });

Lib.bench({ name: "day06 - part 1", fn: getFourNonConsecutiveChars });
Lib.bench({ name: "day06 - part 2", fn: getFourteenNonConsecutiveChars });

Lib.bench({ name: "day07 - part 1", fn: getRecursiveSumOfDirsBelow100k });
Lib.bench({ name: "day07 - part 2", fn: getSizeOfFolderToRemove });

Lib.bench({ name: "day08 - part 1", fn: getVisibleTrees });
Lib.bench({ name: "day08 - part 2", fn: getHighestViewScore });

Lib.bench({ name: "day09 - part 1", fn: getTailVisitedCount });
Lib.bench({ name: "day09 - part 2", fn: getNinthTailVisitCount });

Lib.bench({ name: "day10 - part 1", fn: sumOfSixSignalStrengths });
Lib.bench({ name: "day10 - part 2", fn: decodedLettersAsImage });

Lib.bench({ name: "day11 - part 1", fn: monkeyBusinessLevelAfter20 });
Lib.bench({ name: "day11 - part 2", fn: monkeyBusinessLevelAfter10k });
