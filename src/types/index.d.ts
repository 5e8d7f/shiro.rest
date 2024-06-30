export type SiteConfig = {
  name: string
  author: string
  description: string
  keywords: Array<string>
  url: string
  links: {
    discordBot: string
    discordUser: string
    telegramBot: string
    contact: {
      telegram: string
      discord: string
    }
  }
  ogImage: string
}
