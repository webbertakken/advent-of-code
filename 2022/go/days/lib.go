package days

import (
	"fmt"
	"os"
)

const InputPath string = "../input"

func GetInput(dayName string) (string, error) {
	file, err := os.ReadFile(fmt.Sprintf("%s/%s.txt", InputPath, dayName))

	return string(file), err
}
