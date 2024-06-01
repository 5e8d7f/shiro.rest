import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
    <div className="mx-auto grid justify-center gap-4 md:max-w-[64rem] md:grid-cols-2">
      {cardData.map((card) => (
        <Card
          key={card.title}
          className="relative col-span-1 overflow-hidden p-2"
          id="card"
        >
          <div className="flex h-[150px] flex-col justify-between rounded-md p-6">
            <div className="flex flex-row items-center -space-x-4">
              {card.icon}
            </div>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
          </div>
        </Card>
      ))}
    </div>
  )
}
