import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "shiro",
  description:
    "A fast, efficient, and user-friendly Discord bot that offers a wide range of features to make your information gathering better.",
  author: "shiro",
  keywords: ["osint", "discord", "bot", "information", "security", "hacking"],
  url: env.NEXT_PUBLIC_APP_URL,
  links: {
    discordBot:
      "https://discord.com/oauth2/authorize?client_id=1235003656248627210&permissions=274878220352&response_type=code&redirect_uri=https%3A%2F%2Fshiro.rest%2Fsuccess&integration_type=0&scope=identify+applications.commands+bot",
    discordUser:
      "https://discord.com/oauth2/authorize?client_id=1235003656248627210&response_type=code&redirect_uri=https%3A%2F%2Fshiro.rest%2Fsuccess&integration_type=1&scope=identify+applications.commands",
    telegramBot: "https://t.me/shiro_bot",
    contact: {
      telegram: "https://t.me/YiordanoIgnacio",
      discord: "https://discord.com/users/213743026026184704",
    }
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
