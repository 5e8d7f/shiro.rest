"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useToast } from "@/components/ui/use-toast"

export default function Success({ params }: { params: { code: string } }) {
  const [isValid, setIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code: params.code,
          }),
        })
        const data = await response.json()
        setIsValid(data.success)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [params.code])

  if (isLoading) {
    return (
      <main className="flex h-screen animate-fade-in flex-col items-center justify-center pt-6 pb-8 text-center md:py-24 lg:py-16">
        <Icons.loading
          className="animate-spin text-primary-foreground"
          size={48}
        />
      </main>
    )
  }

  if (!isValid) {
    return (
      <main className="flex h-screen flex-col items-center justify-center pt-6 pb-8 text-center md:py-24 lg:py-16">
        <h1 className="font-bold text-3xl">Invalid code</h1>
        <p className="text-muted-foreground">
          The code you entered is invalid. Please try again.
        </p>
        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="mt-4 flex items-center gap-2"
        >
          <Icons.left size={16} />
          Go back
        </Button>
      </main>
    )
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center pt-6 pb-8 text-center md:py-24 lg:py-16">
      <h1 className="font-bold text-3xl">Claim your shiro purchase</h1>
      <p className="text-muted-foreground">
        To claim your purchase, you must
        <a
          href="https://discord.com/oauth2/authorize?client_id=1209567540284489818"
          className="mr-1 ml-1 font-bold text-blue-500 transition-colors duration-200 hover:text-blue-600 hover:underline"
        >
          authorize with Discord
        </a>
        and run the following command:
      </p>

      <Button
        className="mt-4 font-mono text-sm"
        variant="link"
        onClick={() => {
          toast({
            title: "Copied to clipboard",
            description: "Run the command in Discord",
          })
          navigator.clipboard.writeText(`/account claim code:${params.code}`)
        }}
      >
        /account claim code:{params.code}
      </Button>
    </main>
  )
}
