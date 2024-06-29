"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Icons } from "@/components/icons"
import { isValidCredits } from "@/lib/text"
import { useToast } from "@/components/ui/use-toast"
export function Payment() {
  const whatsIncluded = [
    "Access to all available features",
    "Pay only for what you use",
    "Full technical support",
  ]
    const { toast } = useToast()
  const [credits, setCredits] = useState(350)
  const [error, setError] = useState("")
  const [errorAlert, setErrorAlert] = useState("")
  const [loading, setLoading] = useState(false)

  function createPayment(credits: number) {
    setLoading(true)
    setError("")
    setErrorAlert("")
    if (!isValidCredits(credits)) {
      setError("Invalid amount")
      setErrorAlert("Please enter a valid amount")
      setLoading(false)
      return
    }
    // This is where you would normally make a request to your backend
    // to create a payment session
    // For the sake of this example, we will simply simulate a delay
    setTimeout(() => {
      setLoading(false)
      setError("Payment failed")
      setErrorAlert("Please try again later")
    }
    , 2000)
  }

  return (
    <Card className="grid w-full items-start gap-10 p-10 md:grid-cols-[1fr_200px]">
      <div className="grid gap-6">
        <CardTitle className="text-xl sm:text-2xl">
          What&apos;s included
        </CardTitle>
        <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {whatsIncluded.map((item: string) => (
            <li key={item} className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4 text-center">
        <CardHeader className="flex flex-col items-center gap-2">
          <CardTitle className="text-6xl">$0.05</CardTitle>
          <CardDescription className="text-sm">per credit</CardDescription>
        </CardHeader>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <Icons.barcode className="mr-2 h-4 w-4" />
              Purchase
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Icons.barcode className="mr-2 h-6 w-6" />
                Purchase
              </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              if you want to purchase shiro, you can do so by selecting one of
              the options below.
            </DialogDescription>
            <div className="flex flex-col gap-4">
              <Input
                type="number"
                placeholder="Amount"
                value={credits || 400}
                onChange={(e) => {
                  setCredits(Number(e.target.value))
                }}
                className={`w-full ${!isValidCredits(credits) && "border-red-500"} `}
              />
              <span className="text-xs text-muted-foreground w-full">
                Minimum amount is 20 credits
              </span>
              <Button
                variant="outline"
                className={
                  !isValidCredits(credits)
                    ? "w-full text-red-500 disabled"
                    : "w-full"
                }
                onClick={() => createPayment(credits)}
                disabled={!isValidCredits(credits)}
              >
                {loading ? (
                  <Icons.loading className="h-4 w-4 mr-2 animate-spin" />
                ) : !isValidCredits(credits) ? (
                  <Icons.invalidShoppingCart className="h-4 w-4 mr-2" />
                ) : (
                  <Icons.shoppingCart className="h-4 w-4 mr-2" />
                )}
                Proceed to payment
                </Button>
            </div>
            {error && (
            <DialogFooter>
                <Button
                  variant="outline"
                  className="w-full text-red-500"
                  onClick={() => {
                    toast({
                      title: error,
                      description: errorAlert,
                    })
                  }}
                >
                  {error}
                </Button>
            </DialogFooter>
              )}
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  )
}
