import { benchmark } from '../tests/testLib'
import { getNumberOfAllAntiNodes, getNumberOfAntiNodes } from '../day08'

benchmark('day08 - part 1', getNumberOfAntiNodes)
benchmark('day08 - part 2', getNumberOfAllAntiNodes)
