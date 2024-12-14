import { benchmark } from '../tests/testLib'
import { wasmGetRevisedTotalCalibrationResult, wasmGetTotalCalibrationResult } from '../day07-wasm'

benchmark('day07 (wasm) - part 1', wasmGetTotalCalibrationResult)
benchmark('day07 (wasm) - part 2', wasmGetRevisedTotalCalibrationResult)
