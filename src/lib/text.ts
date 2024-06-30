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
export function creditsToAmount(credits: number): number {
  return credits * 0.05
}

// minimal is 350, maximal is 10000
export function isMinimalCredit(credits: number): boolean {
  return credits >= 350
}

export function isMaximalCredit(credits: number): boolean {
  return credits <= 10000
}
