"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
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

export function Navbar() {
  const links = [
    { title: "Features", href: "/#features" },
    { title: "Pricing", href: "/#pricing" },
    { title: "FAQ", href: "/faq" },
  ]

  const types = [
    {
      title: "Install for me",
      icon: <Icons.user className="h-6 w-6" />,
      link: "https://discord.com/oauth2/authorize?client_id=1235003656248627210&response_type=code&redirect_uri=https://shiro.rest/success&integration_type=1&scope=applications.commands",
    },
    {
      title: "Install for my server",
      icon: <Icons.guild className="h-6 w-6" />,
      link: "https://discord.com/oauth2/authorize?client_id=1235003656248627210&permissions=274878220288&response_type=code&redirect_uri=https%3A%2F%2Fshiro.rest%2Fsuccess&scope=applications.commands+bot",
    },
  ]

  return (
    <header className="container top-0 z-40">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
          <nav className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:flex"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <nav>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Icons.discord className="mr-2 h-4 w-4" />
                Add to Discord
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Authorization</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                Choose the type of installation you want to perform.
              </DialogDescription>
              <DialogFooter>
                {types.map((type) => (
                  <Button
                    key={type.title}
                    variant="outline"
                    className="mt-2 w-full"
                    asChild
                  >
                    <Link href={type.link} prefetch={false}>
                      {type.icon}
                      <p className="ml-2 inline-block">{type.title}</p>
                    </Link>
                  </Button>
                ))}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </nav>
      </div>
    </header>
  )
}
