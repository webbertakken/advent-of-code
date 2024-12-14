import { benchmark } from '../tests/testLib'
import { getNumberOfSecondsForEasterEgg, getSafetyFactorAfter100Seconds } from '../day14'

benchmark('day14 - part 1', getSafetyFactorAfter100Seconds)
benchmark('day14 - part 2', getNumberOfSecondsForEasterEgg)
