"use client"

import { siteConfig } from "@/config/site"
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
          Feel free to contact me on Telegram at
          <a
            href={siteConfig.links.telegramSupport}
            className="ml-1 mr-1 text-blue-400 hover:underline"
          >
            @YiordanoIgnacio
          </a>
          with any questions or concerns you may have.
        </p>
      ),
    },
    {
      question: "Can I trust shiro with my data?",
      answer:
        "Yes, we take your privacy and data security very seriously. We do not store any personal information about you.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept most major cryptocurrencies, if you have any questions, please contact us.",
    },
    {
      question: "Can I transfer my credits to another user?",
      answer: (
        <p>
          Yes, you can transfer your credits to another user. To do so, you need
          to use the command
          <code
            onClick={() =>
              navigator.clipboard.writeText("/account transfer user: amount:")
            }
            className="ml-1 cursor-pointer text-blue-400 hover:underline"
          >
            /account transfer user: amount:
          </code>
          , replacing <code>amount</code> with the number of credits you want to
          transfer and <code>user</code> with the user ID of the person you want
          to transfer the credits to.
        </p>
      ),
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
