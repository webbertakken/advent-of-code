import { bench } from "vitest";
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
import { fewestStepsRequired, fewestStepsRequiredFromAnyA } from "../day12.ts";
import { decoderKeyForDistressSignal, sumOfIndicesOfCorrectPairs } from "../day13.ts";

bench("day01 - part 1", highestTotal);
bench("day01 - part 2", sumOfTopThree);

bench("day02 - part 1", strategy1Score);
bench("day02 - part 2", strategy2Score);

bench("day03 - part 1", prioritySum);
bench("day03 - part 2", badgesSum);

bench("day04 - part 1", getNumberOfCompleteOverlaps);
bench("day04 - part 2", getNumberOfPartialOverlaps);

bench("day05 - part 1", topOfStacksUsingMover9000);
bench("day05 - part 2", topOfStacksUsingMover9001);

bench("day06 - part 1", getFourNonConsecutiveChars);
bench("day06 - part 2", getFourteenNonConsecutiveChars);

bench("day07 - part 1", getRecursiveSumOfDirsBelow100k);
bench("day07 - part 2", getSizeOfFolderToRemove);

bench("day08 - part 1", getVisibleTrees);
bench("day08 - part 2", getHighestViewScore);

bench("day09 - part 1", getTailVisitedCount);
bench("day09 - part 2", getNinthTailVisitCount);

bench("day10 - part 1", sumOfSixSignalStrengths);
bench("day10 - part 2", decodedLettersAsImage);

bench("day11 - part 1", monkeyBusinessLevelAfter20);
bench("day11 - part 2", monkeyBusinessLevelAfter10k);

bench("day12 - part 1", fewestStepsRequired);
bench("day12 - part 2", fewestStepsRequiredFromAnyA);

bench("day13 - part 1", sumOfIndicesOfCorrectPairs);
bench("day13 - part 2", decoderKeyForDistressSignal);
