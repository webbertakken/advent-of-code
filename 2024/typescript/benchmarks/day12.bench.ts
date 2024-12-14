import { benchmark } from '../tests/testLib'
import { getCombinedPrice, getDiscountedPrice } from '../day12'

benchmark('day12 - part 1', getCombinedPrice)
benchmark('day12 - part 2', getDiscountedPrice)
