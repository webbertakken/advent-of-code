import { part1, part2 } from '../dayXX'

import { benchmark } from '../tests/testLib'
import { correctedCalibrationValues, simpleCalibrationValues } from '../day01'

benchmark('dayXX - part 1', part1)
benchmark('dayXX - part 2', part2)

benchmark('day01 - part 1', simpleCalibrationValues)
benchmark('day01 - part 2', correctedCalibrationValues)
