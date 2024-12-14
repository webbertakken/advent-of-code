import { benchmark } from '../tests/testLib'
import { getCombinedNumberOfTrails, getCombinedTrailheadScores } from '../day10'

benchmark('day10 - part 1', getCombinedTrailheadScores)
benchmark('day10 - part 2', getCombinedNumberOfTrails)
