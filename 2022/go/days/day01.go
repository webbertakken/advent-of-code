package days

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

func Day01() {
	input, err := GetInput("day01")
	if err != nil {
		fmt.Println(err)
		return
	}

	// Part 1
	groups := strings.Split(input, "\n\n")

	totals := []int{}
	for _, group := range groups {
		numbers := strings.Split(group, "\n")

		total := 0
		for _, numberString := range numbers {
			number, _ := strconv.Atoi(numberString)
			total += number
		}

		totals = append(totals, total)
	}

	sort.Ints(totals)

	max := totals[len(totals)-1:][0]
	fmt.Println("Max:", max)

	// Part 2
	topThreeTotals := totals[len(totals)-3:]

	sumOfTopThree := 0
	for _, total := range topThreeTotals {
		sumOfTopThree += total
	}

	fmt.Println("Sum of top three:", sumOfTopThree)
}
