export function numberToText(num: number): string {
  const numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]
  return num
    .toString()
    .split("")
    .map((digit) => numberWords[Number.parseInt(digit)])
    .join("")
}

// 1 credit = 0.05
export function creditsToNumber(credits: number): number {
  return credits * 0.05
}
