package days

import (
	"fmt"
)

func DayXX() {
	input, err := GetInput("day01")
	if err != nil {
		fmt.Println(err)
		return
	}

	// Part 1
	fmt.Println("Hello, World!", input)

	// Part 2
}
