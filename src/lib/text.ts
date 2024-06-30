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

export function creditsToAmount(credits: number): number {
  return credits * 0.01
}

export function isMinimalCredit(credits: number): boolean {
  return credits >= 1000
}

export function isMaximalCredit(credits: number): boolean {
  return credits <= 5000
}
