use rust::read_input;

#[derive(PartialEq, Debug, Copy, Clone)]
enum Shape {
    Rock = 1,
    Paper,
    Scissors,
}

impl Shape {
    fn new(input: char) -> Shape {
        match input {
            'A' | 'X' => Shape::Rock,
            'B' | 'Y' => Shape::Paper,
            'C' | 'Z' => Shape::Scissors,
            _ => panic!("Unexpected input"),
        }
    }

    fn beats(&self, other: &Shape) -> bool {
        match self {
            Shape::Rock => other == &Shape::Scissors,
            Shape::Paper => other == &Shape::Rock,
            Shape::Scissors => other == &Shape::Paper,
        }
    }

    fn score_against(&self, other: &Shape) -> i32 {
        let value = *self as i32;
        if self == other {
            3 + value
        } else if self.beats(other) {
            6 + value
        } else {
            value
        }
    }
}

pub fn main() {
    let input = read_input("day02");
    let rounds = input.split("\n");

    // Part 1
    let score = rounds.clone().map(|round| {
        let opponent = Shape::new(round.chars().next().unwrap());
        let player = Shape::new(round.chars().nth(2).unwrap());
        player.score_against(&opponent)
    }).sum::<i32>();
    println!("Strategy 1 score: {:?}", score);


    // Part 2
    let score = rounds.map(|round| {
        let opponent = Shape::new(round.chars().next().unwrap()) as i32;
        match round.chars().nth(2).unwrap() {
            'X' => if opponent == 1 { 3 } else { opponent - 1 },
            'Y' => opponent + 3,
            'Z' => opponent % 3 + 7,
            _ => panic!("Unexpected input"),
        }
    }).sum::<i32>();
    println!("Strategy 2 score: {:?}", score);
}
