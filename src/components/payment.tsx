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
import { Icons } from "@/components/icons"
import { useState, useEffect } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { creditsToAmount, isMaximalCredit, isMinimalCredit } from "@/lib/text"
import { useToast } from "@/components/ui/use-toast"

export function Payment() {
  const [loading, setLoading] = useState(false)
  const [amount, setAmount] = useState(1000)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const { toast } = useToast()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const whatsIncluded = [
    "Access to all available features",
    "Pay only for what you use",
    "Full technical support",
  ]
  const isAboveMax = !isMaximalCredit(amount)
  const isBelowMin = !isMinimalCredit(amount)

  function createPayment(amount: number): void {
    const issue = isBelowMin
      ? `Minimum amount is $${creditsToAmount(1000)}.00 (1000 credits)`
      : isAboveMax
        ? `Maximum amount is $${creditsToAmount(5000)}.00 (5000 credits)`
        : null
    if (issue) {
      toast({
        title: "Error",
        description: issue,
      })
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Success",
        description: `You have successfully purchased ${amount} credits`,
      })
    }, 2000)
  }

  return (
    <Card className="grid w-full items-start gap-10 p-10 md:grid-cols-[1fr_200px]">
      <div className="grid gap-6">
        <CardTitle className="text-xl sm:text-2xl">
          What&apos;s included
        </CardTitle>
        <ul className="grid gap-3 text-muted-foreground text-sm sm:grid-cols-2">
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
          <CardTitle className="text-6xl">$0.01</CardTitle>
          <CardDescription className="text-sm">per credit</CardDescription>
        </CardHeader>
        {isMobile ? (
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="w-full">
                <Icons.barcode className="mr-2 h-4 w-4" />
                Purchase
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="flex items-center">
                  <Icons.barcode className="mr-2 h-6 w-6" />
                  Purchase Shiro
                </DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className="text-center">
                if you want to purchase shiro, you can do so by selecting one of
                the options below.
              </DrawerDescription>
              <DrawerFooter>
                <Input
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    setAmount(value)
                  }}
                  className={`w-full ${isBelowMin || isAboveMax ? "border-red-500" : ""}`}
                />
                <span className="w-full text-muted-foreground text-xs">
                  {(isBelowMin &&
                    `Minimum amount is $${creditsToAmount(1000)}.00 (1000)`) ||
                    (isAboveMax &&
                      `Maximum amount is $${creditsToAmount(5000)}.00 (5000)`) ||
                    `${amount} credits will cost you $${creditsToAmount(
                      amount
                    ).toFixed(2)}`}
                </span>
                <Button
                  variant="outline"
                  className={
                    isBelowMin || isAboveMax
                      ? "disabled w-full text-red-500"
                      : "w-full"
                  }
                  onClick={() => createPayment(amount)}
                  disabled={isBelowMin || isAboveMax}
                >
                  Proceed to payment
                  {loading ? (
                    <Icons.loading className="ml-2 h-4 w-4 animate-spin" />
                  ) : isBelowMin || isAboveMax ? (
                    <Icons.invalidShoppingCart className="ml-2 h-4 w-4" />
                  ) : (
                    <Icons.shoppingCart className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ) : (
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
                  Purchase Shiro
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
                  value={amount}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    setAmount(value)
                  }}
                  className={`w-full ${isBelowMin || isAboveMax ? "border-red-500" : ""}`}
                />
                <span className="w-full text-muted-foreground text-xs">
                  {(isBelowMin &&
                    `Minimum amount is $${creditsToAmount(1000)}.00 (1000)`) ||
                    (isAboveMax &&
                      `Maximum amount is $${creditsToAmount(5000)}.00 (5000)`) ||
                    `${amount} credits will cost you $${creditsToAmount(
                      amount
                    ).toFixed(2)}`}
                </span>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  className={
                    isBelowMin || isAboveMax
                      ? "disabled w-full text-red-500"
                      : "w-full"
                  }
                  onClick={() => createPayment(amount)}
                  disabled={isBelowMin || isAboveMax}
                >
                  Proceed to payment
                  {loading ? (
                    <Icons.loading className="ml-2 h-4 w-4 animate-spin" />
                  ) : isBelowMin || isAboveMax ? (
                    <Icons.invalidShoppingCart className="ml-2 h-4 w-4" />
                  ) : (
                    <Icons.shoppingCart className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </Card>
  )
}
