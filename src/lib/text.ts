export function isValidCredits(credits: number) {
  return credits >= 350 && credits <= 5000
}

// 1 credit = 0.05 USD
export function calculatePrice(credits: number) {
  return credits * 0.05
}
