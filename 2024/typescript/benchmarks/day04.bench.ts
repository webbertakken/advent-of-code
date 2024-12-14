import { benchmark } from '../tests/testLib'
import { getCrossedMasCount, getXmasCount } from '../day04'

benchmark('day04 - part 1', getXmasCount)
benchmark('day04 - part 2', getCrossedMasCount)
