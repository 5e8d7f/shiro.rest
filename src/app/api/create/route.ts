import { creditsToAmount } from "@/lib/text"
import { Cryptomus } from "cryptomus-sdk"

const cryptomus = new Cryptomus(
  process.env.MERCHANT_ID ?? "",
  process.env.PAYMENT_KEY ?? "",
  process.env.PAYOUT_KEY ?? ""
)

export async function POST(request: Request) {
  const { amount } = await request.json()

  if (amount < 1000 || amount > 5000) {
    return Response.json({ message: "Invalid amount" }, { status: 400 })
  }

  const code = `SHIRO-${Math.random().toString(36).substring(2).toUpperCase()}-REST`

  try {
    const paymentForm = await cryptomus.createPayment({
      amount: creditsToAmount(amount).toString(),
      currency: "USD",
      order_id: code,
      url_callback:
        "https://uh37mzy6508rlxciran4c18qvhrcnam1.femboys.rest/callback",
      url_return: `https://www.shiro.rip/success/${code}`,
    })

    return Response.json({ url: paymentForm.result.url })
  } catch (error) {
    return Response.json({ message: "Internal server error" }, { status: 500 })
  }
}
