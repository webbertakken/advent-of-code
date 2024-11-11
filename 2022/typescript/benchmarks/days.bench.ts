import { highestTotal, sumOfTopThree } from '../day01'
import { strategy1Score, strategy2Score } from '../day02'
import { badgesSum, prioritySum } from '../day03'
import { getNumberOfCompleteOverlaps, getNumberOfPartialOverlaps } from '../day04'
import { topOfStacksUsingMover9000, topOfStacksUsingMover9001 } from '../day05'
import { getFourNonConsecutiveChars, getFourteenNonConsecutiveChars } from '../day06'
import { getRecursiveSumOfDirsBelow100k, getSizeOfFolderToRemove } from '../day07'
import { getHighestViewScore, getVisibleTrees } from '../day08'
import { getNinthTailVisitCount, getTailVisitedCount } from '../day09'
import { decodedLettersAsImage, sumOfSixSignalStrengths } from '../day10'
import { monkeyBusinessLevelAfter20, monkeyBusinessLevelAfter10k } from '../day11'
import { fewestStepsRequired, fewestStepsRequiredFromAnyA } from '../day12'
import { decoderKeyForDistressSignal, sumOfIndicesOfCorrectPairs } from '../day13'
import { benchmark } from '../tests/testLib'

benchmark('day01 - part 1', highestTotal)
benchmark('day01 - part 2', sumOfTopThree)

benchmark('day02 - part 1', strategy1Score)
benchmark('day02 - part 2', strategy2Score)

benchmark('day03 - part 1', prioritySum)
benchmark('day03 - part 2', badgesSum)

benchmark('day04 - part 1', getNumberOfCompleteOverlaps)
benchmark('day04 - part 2', getNumberOfPartialOverlaps)

benchmark('day05 - part 1', topOfStacksUsingMover9000)
benchmark('day05 - part 2', topOfStacksUsingMover9001)

benchmark('day06 - part 1', getFourNonConsecutiveChars)
benchmark('day06 - part 2', getFourteenNonConsecutiveChars)

benchmark('day07 - part 1', getRecursiveSumOfDirsBelow100k)
benchmark('day07 - part 2', getSizeOfFolderToRemove)

benchmark('day08 - part 1', getVisibleTrees)
benchmark('day08 - part 2', getHighestViewScore)

benchmark('day09 - part 1', getTailVisitedCount)
benchmark('day09 - part 2', getNinthTailVisitCount)

benchmark('day10 - part 1', sumOfSixSignalStrengths)
benchmark('day10 - part 2', decodedLettersAsImage)

benchmark('day11 - part 1', monkeyBusinessLevelAfter20)
benchmark('day11 - part 2', monkeyBusinessLevelAfter10k)

benchmark('day12 - part 1', fewestStepsRequired)
benchmark('day12 - part 2', fewestStepsRequiredFromAnyA)

benchmark('day13 - part 1', sumOfIndicesOfCorrectPairs)
benchmark('day13 - part 2', decoderKeyForDistressSignal)
