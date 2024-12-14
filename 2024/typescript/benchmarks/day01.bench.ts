import { benchmark } from '../tests/testLib'
import { getTotalDistanceBetweenPairs, getTotalSimilarityScore } from '../day01'

benchmark('day01 - part 1', getTotalDistanceBetweenPairs)
benchmark('day01 - part 2', getTotalSimilarityScore)
