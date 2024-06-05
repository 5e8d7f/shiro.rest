"use client"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import DotPattern from "@/components/ui/dot"
import { Icons } from "@/components/icons"

export default function Authorized() {
  return (
    <main className="relative flex h-screen animate-fade-in flex-col items-center justify-center pb-8 pt-6 text-center md:py-24 lg:py-16">
      <DotPattern className="absolute left-0 top-0 z-0" />
      <h1 className="py-8 text-3xl font-bold md:text-4xl lg:text-5xl">
        You have successfully authorized {siteConfig.name}
      </h1>
      <p className="text-lg text-muted-foreground">
        You can now close this tab and return to Discord.
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
