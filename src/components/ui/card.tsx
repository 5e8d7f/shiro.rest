"use client"

import { forwardRef, type HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

const isCard = (element: HTMLElement) =>
  element.id === "card" && !document.documentElement.classList.contains("light")

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      onMouseMove={(e) => {
        if (!isCard(e.currentTarget)) return
        const card = e.currentTarget
        card.style.setProperty(
          "--mouse-x",
          `${Math.round(e.clientX - card.getBoundingClientRect().left)}px`
        )
        card.style.setProperty(
          "--mouse-y",
          `${Math.round(e.clientY - card.getBoundingClientRect().top)}px`
        )
      }}
      onMouseLeave={(e) => {
        if (!isCard(e.currentTarget)) return
        e.currentTarget.removeAttribute("style")
      }}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("font-bold", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription }
