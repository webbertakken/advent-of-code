import { benchmark } from '../tests/testLib'
import { getNumberOfDesiredDesignsPossible, getNumberOfAllPossibleDesigns } from '../day19'

benchmark('day19 - part 1', getNumberOfDesiredDesignsPossible)
benchmark('day19 - part 2', getNumberOfAllPossibleDesigns)
