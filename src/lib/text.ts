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
  return credits * 0.01 // 100 credits = 1 USD
}

export function amountToCredits(amount: number): number {
  return amount * 100 // 1 USD = 100 credits
}

export function isMinimalCredit(credits: number): boolean {
  return credits >= 1000
}

export function isMaximalCredit(credits: number): boolean {
  return credits <= 5000
}
