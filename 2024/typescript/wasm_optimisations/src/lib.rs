use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn basic_calculation(input: i32) -> i32 {
    input * 4 * 4 * 4 * 4
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn basic_calculation_gives_the_right_output() {
        let result = basic_calculation(999);
        assert_eq!(result, 255744);
    }
}
