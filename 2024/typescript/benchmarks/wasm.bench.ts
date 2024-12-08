import { benchmark } from '../tests/testLib'
import { typescriptNativeCode, offloadToWasm } from '../dayXX-wasm'
import { wasmGetRevisedTotalCalibrationResult, wasmGetTotalCalibrationResult } from '../day07-wasm'

benchmark('dayXX - wasm - part 1', typescriptNativeCode)
benchmark('dayXX - wasm - part 2', offloadToWasm)

benchmark('day07 (wasm) - part 1', wasmGetTotalCalibrationResult)
benchmark('day07 (wasm) - part 2', wasmGetRevisedTotalCalibrationResult)
