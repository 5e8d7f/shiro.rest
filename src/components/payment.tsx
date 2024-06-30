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

export function Payment() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const whatsIncluded = [
    "Access to all available features",
    "Pay only for what you use",
    "Full technical support",
  ]

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
              <DrawerDescription>
                We are currently experiencing issues with our payment processor.
                Please try again later.
              </DrawerDescription>
              <DrawerFooter>
                <DrawerClose>Close</DrawerClose>
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
                We are currently experiencing issues with our payment processor.
                Please try again later.
              </DialogDescription>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </Card>
  )
}
