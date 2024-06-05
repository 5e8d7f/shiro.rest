"use client"

import { Button } from "@/components/ui/button"
import DotPattern from "@/components/ui/dot"
import { Icons } from "@/components/icons"

export default function Authorized() {
  return (
    <main className="animate-fade-in relative flex h-screen flex-col items-center justify-center pb-8 pt-6 text-center md:py-24 lg:py-16">
      <DotPattern className="absolute left-0 top-0 z-0" />
      <h1 className="py-8 text-3xl font-bold md:text-4xl lg:text-5xl">
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
