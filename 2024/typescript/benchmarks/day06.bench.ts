import { benchmark } from '../tests/testLib'
import { getGuardsDistinctVisitedPositions, getPossiblePlacesForObstacles } from '../day06'

benchmark('day06 - part 1', getGuardsDistinctVisitedPositions)
benchmark('day06 - part 2', getPossiblePlacesForObstacles)
