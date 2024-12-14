import { benchmark } from '../tests/testLib'
import { typescriptNativeCode, offloadToWasm } from '../dayXX-wasm'

benchmark('dayXX - wasm - part 1', typescriptNativeCode)
benchmark('dayXX - wasm - part 2', offloadToWasm)
