import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Navbar } from "@/components/navbar"

export default function FAQ() {
  const QnA = [
    {
      question: "What is shiro?",
      answer:
        "shiro is a Discord bot that offers a wide range of features to make your information gathering better.",
    },
    {
      question: "Is there a free trial?",
      answer: "No, we do not offer free trials.",
    },
    {
      question: "Where can I receive help?",
      answer: (
        <p>
          If you have questions or need support regarding the bot and its
          features, you can
          <a
            href="https://igna.one"
            className="ml-1 text-blue-500 hover:underline"
          >
            contact me
          </a>
          .
        </p>
      ),
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept most major cryptocurrencies, if you have any questions, please contact us.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time.",
    },
    {
      question: "Can I get a refund?",
      answer: "No, we do not offer refunds.",
    },
  ]

  return (
    <main className="min-h-[80vh]">
      <Navbar />
      <h1 className="py-8 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" className="container mx-auto max-w-[64rem]">
        {QnA.map((item, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <span className="text-muted-foreground">{item.answer}</span>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  )
}
