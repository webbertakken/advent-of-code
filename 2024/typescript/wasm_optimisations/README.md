# Wasm Optimisations

## How to set up a lib like this?

It's only a few steps to set up a rust lib that compiles to wasm with TypeScript bindings.

```bash
rustup update stable
cargo install wasm-pack
cargo new --lib wasm_optimisations
```

Add the following to Cargo.toml:

```toml
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

Add `#[wasm_bindgen]` to the functions you want to expose to TypeScript like so:

```rust
#[wasm_bindgen]
pub fn basic_calculation(input: i32) -> i32 {
    input * 4 * 4 * 4 * 4
}
```

Finally build it

```bash
wasm-pack build --target web
```

Then you can use it in TypeScript like so:

```typescript
import { initSync, basic_calculation } from './wasm_optimisations'

initSync(readFileSync('./wasm_optimisations/pkg/wasm_optimisations_bg.wasm'))

basic_calculation(1)
```

> _**Note**: you can also import `init` as the default import and call it without parameters, however, that doesn't work in tests and benchmarks across Node.js and Bun._

That's it! You can now use your Rust lib in TypeScript.


