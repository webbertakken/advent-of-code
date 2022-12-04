use rust::read_input;

fn input() -> Vec<[i32; 4]> {
    read_input("day04")
        .lines()
        .map(|a| {
            a.split(&[',', '-'])
                .map(|n| n.parse::<i32>().unwrap())
                .collect::<Vec<i32>>()
                .try_into()
                .unwrap()
        })
        .collect()
}

fn get_number_of_complete_overlaps(input: Vec<[i32; 4]>) -> i32 {
    input.iter().fold(0, |acc, [a, b, c, d]| {
        let contains = a >= c && b <= d;
        let overlaps = a <= c && b >= d;

        if contains || overlaps {
            acc + 1
        } else {
            acc
        }
    })
}

fn get_number_of_partial_overlaps(input: Vec<[i32; 4]>) -> i32 {
    input.iter().fold(
        0,
        |acc, [a, b, c, d]| if a > d || b < c { acc } else { acc + 1 },
    )
}

pub fn main() {
    // Part 1
    println!(
        "Complete overlaps: {:?}",
        get_number_of_complete_overlaps(input())
    );

    // Part 2
    println!(
        "Partials overlaps: {:?}",
        get_number_of_partial_overlaps(input())
    );
}

// Tests
#[cfg(test)]
mod tests {
    use super::*;

    fn partial_overlap_data() -> Vec<([i32; 4], i32)> {
        vec![
            ([2, 4, 6, 8], 0),
            ([2, 3, 4, 5], 0),
            ([5, 7, 7, 9], 1),
            ([2, 8, 3, 7], 1),
            ([6, 6, 4, 6], 1),
            ([2, 6, 4, 8], 1),
        ]
    }

    fn complete_overlap_data() -> Vec<([i32; 4], i32)> {
        vec![
            ([2, 4, 6, 8], 0),
            ([2, 3, 4, 5], 0),
            ([5, 7, 7, 9], 0),
            ([2, 8, 3, 7], 1),
            ([6, 6, 4, 6], 1),
            ([2, 6, 4, 8], 0),
        ]
    }

    #[test]
    fn test_get_number_of_complete_overlaps() {
        assert_eq!(get_number_of_complete_overlaps(input()), 556);
    }

    #[test]
    fn test_get_number_of_complete_overlaps_with_data() {
        for (input, expected) in complete_overlap_data() {
            assert_eq!(get_number_of_complete_overlaps(vec![input]), expected);
        }
    }

    #[test]
    fn test_get_number_of_partial_overlaps() {
        assert_eq!(get_number_of_partial_overlaps(input()), 876);
    }

    #[test]
    fn test_get_number_of_partial_overlaps_with_test_data() {
        for (input, expected) in partial_overlap_data() {
            assert_eq!(get_number_of_partial_overlaps(vec![input]), expected);
        }
    }
}
