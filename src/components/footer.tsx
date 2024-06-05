import { ElementType } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

import { Icons } from "./icons"

export function Footer() {
  const contact = [
    {
      title: "Telegram",
      href: siteConfig.links.telegramSupport,
      icon: Icons.contact,
    },
  ]

  return (
    <footer className="container bottom-0 flex flex-row items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
      <div className="flex flex-row items-center gap-2">
        {contact.map(
          (item: { title: string; href: string; icon: ElementType }) => (
            <Button
              variant="outline"
              size="icon"
              key={item.title}
              className="flex gap-2"
              asChild
            >
              <Link
                key={item.title}
                href={item.href}
                aria-label={item.title}
                prefetch={false}
                passHref
                className="flex items-center gap-2"
              >
                <item.icon className="absolute h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
          )
        )}
      </div>
      <div className="flex justify-center">
        <ModeToggle />
      </div>
    </footer>
  )
}
