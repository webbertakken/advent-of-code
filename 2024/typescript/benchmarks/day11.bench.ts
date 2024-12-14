import { benchmark } from '../tests/testLib'
import { getStonesAfterBlinking25Times, getStonesAfterBlinking75Times } from '../day11'

benchmark('day11 - part 1', getStonesAfterBlinking25Times)
benchmark('day11 - part 2', getStonesAfterBlinking75Times)
