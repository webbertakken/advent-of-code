import { benchmark } from '../tests/testLib'
import { getRevisedTotalCalibrationResult, getTotalCalibrationResult } from '../day07'

benchmark('day07 - part 1', getTotalCalibrationResult)
benchmark('day07 - part 2', getRevisedTotalCalibrationResult)
