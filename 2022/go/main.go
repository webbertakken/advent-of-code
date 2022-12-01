package main

import (
	days "advent/days"
	"fmt"
	"os"
)

func main() {
	if len(os.Args) <= 1 {
		fmt.Println("Usage: `go run . day01`")
		return
	}

	day := os.Args[1]
	switch day {
	case "day01":
		days.Day01()
	default:
		fmt.Println("Day not found")
	}
}
