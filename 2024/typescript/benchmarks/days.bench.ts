import { benchmark } from '../tests/testLib'
import { part1, part2 } from '../dayXX'
import { getTotalDistanceBetweenPairs, getTotalSimilarityScore } from '../day01'
import { analiseSafetyAfterProblemDampener, analyseNumberOfSafeStrangeReports } from '../day02'
import { getSumOfAllInstructions, getSumOfEnabledInstructions } from '../day03'
import { getCrossedMasCount, getXmasCount } from '../day04'
import { getSumOfMiddlePageNumbersFromCorrectUpdates, getSumOfMiddlePageNumbersFromIncorrectUpdates } from '../day05'
import { getGuardsDistinctVisitedPositions, getPossiblePlacesForObstacles } from '../day06'
import { getRevisedTotalCalibrationResult, getTotalCalibrationResult } from '../day07'
import { getNumberOfAllAntiNodes, getNumberOfAntiNodes } from '../day08'
import { getChecksumAfterDefragmentingPerBit, getChecksumAfterDefragmentingPerFile } from '../day09'
import { getCombinedNumberOfTrails, getCombinedTrailheadScores } from '../day10'
import { getStonesAfterBlinking25Times, getStonesAfterBlinking75Times } from '../day11'
import { getCombinedPrice, getDiscountedPrice } from '../day12'
import { getMinimumTokenCost, getMinimumTokenCostAfterAddingTenTrillion } from '../day13'

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
benchmark('day06 - part 2', getPossiblePlacesForObstacles)

benchmark('day07 - part 1', getTotalCalibrationResult)
benchmark('day07 - part 2', getRevisedTotalCalibrationResult)

benchmark('day08 - part 1', getNumberOfAntiNodes)
benchmark('day08 - part 2', getNumberOfAllAntiNodes)

benchmark('day09 - part 1', getChecksumAfterDefragmentingPerBit)
benchmark('day09 - part 2', getChecksumAfterDefragmentingPerFile)

benchmark('day10 - part 1', getCombinedTrailheadScores)
benchmark('day10 - part 2', getCombinedNumberOfTrails)

benchmark('day11 - part 1', getStonesAfterBlinking25Times)
benchmark('day11 - part 2', getStonesAfterBlinking75Times)

benchmark('day12 - part 1', getCombinedPrice)
benchmark('day12 - part 2', getDiscountedPrice)

benchmark('day13 - part 1', getMinimumTokenCost)
benchmark('day13 - part 2', getMinimumTokenCostAfterAddingTenTrillion)
