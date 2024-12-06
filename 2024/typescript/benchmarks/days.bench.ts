import { benchmark } from '../tests/testLib'

import { part1, part2 } from '../dayXX'
import { getTotalDistanceBetweenPairs, getTotalSimilarityScore } from '../day01'
import { analiseSafetyAfterProblemDampener, analyseNumberOfSafeStrangeReports } from '../day02'
import { getSumOfAllInstructions, getSumOfEnabledInstructions } from '../day03'
import { getCrossedMasCount, getXmasCount } from '../day04'
import { getSumOfMiddlePageNumbersFromCorrectUpdates, getSumOfMiddlePageNumbersFromIncorrectUpdates } from '../day05'
import { getGuardsDistinctVisitedPositions } from '../day06'

benchmark('dayXX - part 1', part1)
benchmark('dayXX - part 2', part2)

benchmark('day01 - part 1', getTotalDistanceBetweenPairs)
benchmark('day01 - part 2', getTotalSimilarityScore)

benchmark('day02 - part 1', analyseNumberOfSafeStrangeReports)
benchmark('day02 - part 2', analiseSafetyAfterProblemDampener)

benchmark('day03 - part 1', getSumOfAllInstructions)
benchmark('day03 - part 2', getSumOfEnabledInstructions)

benchmark('day04 - part 1', getXmasCount)
benchmark('day04 - part 2', getCrossedMasCount)

benchmark('day05 - part 1', getSumOfMiddlePageNumbersFromCorrectUpdates)
benchmark('day05 - part 2', getSumOfMiddlePageNumbersFromIncorrectUpdates)

benchmark('day06 - part 1', getGuardsDistinctVisitedPositions)
