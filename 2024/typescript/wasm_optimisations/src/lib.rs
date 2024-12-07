use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn basic_calculation(input: i32) -> i32 {
    input * 4 * 4 * 4 * 4
}

#[derive(Debug, Clone, Copy)]
pub enum Operator {
    Add,
    Multiply,
    Concatenate,
}

impl From<String> for Operator {
    fn from(op: String) -> Self {
        match op.as_str() {
            "+" => Operator::Add,
            "*" => Operator::Multiply,
            "||" => Operator::Concatenate,
            _ => Operator::Add,
        }
    }
}


fn calculate(a: i64, b: i64, operator: Operator) -> i64 {
    match operator {
        Operator::Add => a + b,
        Operator::Multiply => a * b,
        Operator::Concatenate => format!("{}{}", a, b).parse().unwrap_or(0),
    }
}

#[wasm_bindgen]
pub fn get_calibration_value(parts: &[i64], expectation: i64, operators: Vec<String>) -> i64 {
    let (a, b) = (parts[0], parts[1]);
    let rest = parts[2..].to_vec();
    for operator in operators.clone() {
        let result = calculate(a, b, operator.into());
        if rest.is_empty() {
            if result == expectation {
                return expectation;
            }
        } else {
            if expectation
                == get_calibration_value(
                    &[result]
                        .iter()
                        .chain(rest.iter())
                        .cloned()
                        .collect::<Vec<_>>(),
                    expectation,
                    operators.clone()
                )
            {
                return expectation;
            }
        }
    }

    0
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn basic_calculation_gives_the_right_output() {
        let result = basic_calculation(999);
        assert_eq!(result, 255744);
    }

    #[test]
    fn get_calibration_value_handles_addition() {
        let parts = vec![1, 2, 3, 4];
        let expectation = 10;
        let operators = vec!["+"].iter().map(|s| s.to_string()).collect();;
        let result = get_calibration_value(&parts, expectation, operators);
        assert_eq!(result, expectation);
    }

    #[test]
    fn get_calibration_value_handles_multiplication() {
        let parts = vec![1, 2, 3, 4];
        let expectation = 24;
        let operators = vec!["*"].iter().map(|s| s.to_string()).collect();
        let result = get_calibration_value(&parts, expectation, operators);
        assert_eq!(result, expectation);
    }

    #[test]
    fn get_calibration_value_handles_concatenation() {
        let parts = vec![1, 2, 3, 4];
        let expectation = 1234;
        let operators = vec!["||"].iter().map(|s| s.to_string()).collect();
        let result = get_calibration_value(&parts, expectation, operators);
        assert_eq!(result, expectation);
    }

    #[test]
    fn get_calibration_value_gives_the_right_output() {
        let parts = vec![1, 2, 5, 4];
        let expectation = 19;
        let operators = vec!["+", "*", "||"].iter().map(|s| s.to_string()).collect();
        let result = get_calibration_value(&parts, expectation, operators);
        assert_eq!(result, expectation);
    }

    #[test]
    fn get_calibration_value_gives_the_right_output_for_a_small_number() {
        let parts = vec![222, 8, 8, 5, 4];
        let expectation = 247;
        let operators = vec!["+", "*", "||"].iter().map(|s| s.to_string()).collect();
        let result = get_calibration_value(&parts, expectation, operators);
        assert_eq!(result, expectation);
    }

    #[test]
    fn get_calibration_value_gives_the_right_output_for_a_large_number() {
        let parts = vec![1, 3, 651, 2, 150, 84, 11, 4, 2];
        let expectation = 14217966116;
        let operators = vec!["+", "*", "||"].iter().map(|s| s.to_string()).collect();
        let result = get_calibration_value(&parts, expectation, operators);
        assert_eq!(result, expectation);
    }
}
