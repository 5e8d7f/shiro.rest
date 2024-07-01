import { amountToCredits } from "@/lib/text"
import sql from "@/lib/db"

export async function POST(request: Request) {
  const { amount, status, additional_data } = await request.json()

  if (!["paid", "paid_over"].includes(status)) {
    return Response.json({ message: "Invalid status" }, { status: 400 })
  }

  try {
    const code = additional_data
    const credits = amountToCredits(amount)

    await sql`
        INSERT INTO
            invoices (code, credits)
        VALUES
            (${code}, ${credits})
        ON CONFLICT (code)
        DO UPDATE
        SET credits = invoices.credits + ${credits}
    `

    console.log(`Added ${credits} credits to invoice ${code}`)
    return Response.json({ message: "Success" }, { status: 200 })
  } catch (error) {
    return Response.json({ message: "Internal server error" }, { status: 500 })
  }
}
