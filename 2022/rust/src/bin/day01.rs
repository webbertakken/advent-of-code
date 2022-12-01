use rust::read_input;

pub fn main() {
    let input = read_input("day01");

    // Part 1
    let groups = input.split("\n\n");
    let totals = groups
        .map(|group| {
            group
                .split('\n')
                .map(|line| line.parse::<i32>().unwrap())
                .reduce(|a, b| a + b)
                .unwrap()
        })
        .collect::<Vec<i32>>();
    let max = totals.iter().max().unwrap();
    println!("Max: {:?}", max);

    // Part 2
    let mut top_three_totals = totals.clone();
    top_three_totals.sort_by(|a, b| b.cmp(a));

    let sum_of_top_three = top_three_totals
        .into_iter()
        .take(3)
        .reduce(|a, b| a + b)
        .unwrap();
    println!("Sum of top three: {:?}", sum_of_top_three);
}
