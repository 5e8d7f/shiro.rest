import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "shiro",
  author: "shiro",
  description:
    "A fast, efficient, and user-friendly Discord bot that offers a wide range of features to make your information gathering better.",
  keywords: ["shiro"],
  url: env.NEXT_PUBLIC_APP_URL,
  links: {
    github: "https://github.com/rxnk/next-boilerplate",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
