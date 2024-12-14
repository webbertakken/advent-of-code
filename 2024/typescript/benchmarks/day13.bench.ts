import { benchmark } from '../tests/testLib'
import { getMinimumTokenCost, getMinimumTokenCostAfterAddingTenTrillion } from '../day13'

benchmark('day13 - part 1', getMinimumTokenCost)
benchmark('day13 - part 2', getMinimumTokenCostAfterAddingTenTrillion)
