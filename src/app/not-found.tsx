"use client"

import { Button } from "@/components/ui/button"
import DotPattern from "@/components/ui/dot"
import { Icons } from "@/components/icons"

export default function Authorized() {
  return (
    <main className="relative flex h-screen animate-fade-in flex-col items-center justify-center pt-6 pb-8 text-center md:py-24 lg:py-16">
      <DotPattern className="absolute top-0 left-0 z-0" />
      <h1 className="py-8 font-bold text-3xl md:text-4xl lg:text-5xl">
        404 | Not Found
      </h1>
      <p className="text-lg text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Button
        variant="outline"
        onClick={() => window.history.back()}
        size="icon"
        className="mt-4"
      >
        <Icons.left size={16} />
      </Button>
    </main>
  )
}
