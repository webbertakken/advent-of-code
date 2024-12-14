import { benchmark } from '../tests/testLib'
import { getSumOfAllInstructions, getSumOfEnabledInstructions } from '../day03'

benchmark('day03 - part 1', getSumOfAllInstructions)
benchmark('day03 - part 2', getSumOfEnabledInstructions)
