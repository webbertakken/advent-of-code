use regex::Regex;
use rust::read_input;

pub fn main() {
    let input = read_input("day03");
    let rucksacks = input.split('\n');

    fn get_value(code: i32) -> i32 {
        if code >= 97 {
            code - 96
        } else {
            code - 38
        }
    }

    // Part 1
    let priority_sum = rucksacks
        .clone()
        .map(|rucksack| {
            let mut chars = rucksack.chars();
            let lhs = chars.by_ref().take(rucksack.len() / 2).collect::<String>();
            let code = chars.find(|c| lhs.contains(*c)).unwrap() as i32;
            get_value(code)
        })
        .sum::<i32>();
    println!("Sum of priorities: {:?}", priority_sum);

    // Part 2
    let mut badge_sum = 0;
    let mut index = -1;
    let mut regex_string = "\\w".to_string();
    rucksacks.for_each(|rucksack| {
        index = (index + 1) % 3;

        if index == 0 {
            regex_string = rucksack.to_string()
        }

        let mut str = Regex::new(&format!(r"[{}]", regex_string))
            .unwrap()
            .find_iter(rucksack)
            .map(|m| m.as_str())
            .collect::<Vec<&str>>();
        str.dedup();
        regex_string = str.join("");

        if index == 2 {
            badge_sum += get_value(regex_string.chars().next().unwrap() as i32);
        };
    });
    println!("Sum of badges: {:?}", badge_sum);
}
