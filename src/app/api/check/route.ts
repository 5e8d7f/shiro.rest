import sql from "@/lib/db"

export async function POST(request: Request) {
  const { code } = await request.json()

  if (!code.startsWith("SHIRO-") || !code.endsWith("-REST")) {
    return Response.json({ message: "Invalid code" }, { status: 400 })
  }

  try {
    const [invoice] = await sql`
        SELECT
            credits
        FROM
            invoices
        WHERE
            code = ${code}
    `

    if (!invoice) {
      return Response.json({ message: "Invoice not found" }, { status: 404 })
    }

    return Response.json({ credits: invoice.credits }, { status: 200 })
  } catch (error) {
    return Response.json({ message: "Internal server error" }, { status: 500 })
  }
}
