const INPUT_PATH: &str = "../input";

pub fn read_input(file: &str) -> String {
    let input = std::fs::read_to_string(format!("{}/{}.txt", INPUT_PATH, file)).unwrap();
    input
}
