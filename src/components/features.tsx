import { MagicCard, MagicContainer } from "@/components/ui/magic-card"
import { Icons } from "@/components/icons"

export function Features() {
  const cardData = [
    {
      icon: <Icons.database size={44} />,
      title: "Intelligence X",
      description: "Search for leaked data from various sources",
    },
    {
      icon: <Icons.discord size={48} />,
      title: "Discord",
      description: "View logs of user names, guilds & messages",
    },
    {
      icon: <Icons.database size={44} />,
      title: "Snusbase",
      description: "Search for data in leaked databases",
    },
    {
      icon: <Icons.mail size={44} />,
      title: "Email",
      description: "View registered websites for a specific email",
    },
  ]

  return (
    <MagicContainer className="mx-auto grid justify-center gap-4 md:max-w-[64rem] md:grid-cols-2">
      {cardData.map((card) => (
        <MagicCard
          key={card.title}
          className="relative col-span-1 overflow-hidden border bg-card p-2 text-card-foreground shadow-sm"
        >
          <div className="flex h-[150px] flex-col justify-between rounded-md p-6">
            <div className="flex flex-row items-center -space-x-4">
              {card.icon}
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold">{card.title}</h3>
              <p className="text-sm text-muted-foreground">
                {card.description}
              </p>
            </div>
          </div>
        </MagicCard>
      ))}
    </MagicContainer>
  )
}
