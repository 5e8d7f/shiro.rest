import Link from "next/link"

import { Features } from "@/components/features"
import { Navbar } from "@/components/navbar"
import { Payment } from "@/components/payment"

export default function Home() {
  return (
    <main className="min-h-[80vh]">
      <Navbar />
      <section className="animate-fade-in flex-grow space-y-6 pb-8 pt-6 md:py-24 lg:py-16">
        <div className="container flex max-w-[64rem] flex-col items-start gap-2 text-start md:items-center md:text-center">
          <Link
            className="flex flex-row items-center rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium transition-colors duration-200 hover:bg-muted/75"
            href="#features"
          >
            What&apos;s new?
          </Link>
          <h1 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
            The next generation of Discord bots
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A fast, efficient, and user-friendly Discord bot that offers a wide
            range of features to make your information gathering better.
          </p>
          <div className="relative -mb-32 mt-16 hidden xl:col-span-7 xl:row-span-2 xl:block">
            <div
              className="pulse-border relative w-[1232px] rounded-2xl border border-white/[.04] bg-white/[.01] p-2 backdrop-blur-[3px]"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 40%, transparent 70%)",
              }}
            >
              <div className="hero-animation-ring-container">
                <div className="hero-animation-ring -inset-0 bg-slate-50/10"></div>
              </div>
              <div className="pulse-border absolute inset-[-1px] rounded-2xl border border-white/[.04] bg-white/[.02] backdrop-blur-[3px]"></div>
              <div className="bg-orange-glow-1 absolute left-[92px] top-[38px] rounded-[551px] opacity-50 blur-[60px]"></div>
              <div className="bg-orange-glow-2 absolute right-[37px] top-[38px] rounded-[551px] opacity-50 blur-[60px]"></div>
              <div className="absolute right-[1px] top-[127px] rounded-[38px] opacity-20 blur-[14px]"></div>
              <div className="relative z-10 overflow-hidden rounded-lg">
                <img
                  src="/images/hero.png"
                  alt="A screenshot of the Aether dashboard"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="animate-fade-in container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24"
        id="features"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-start text-start md:items-center md:space-y-4 md:text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            shiro offers a wide range of premium features to make your
            information gathering more efficient and user-friendly.
          </p>
        </div>
        <Features />
      </section>
      <section
        className="animate-fade-in container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24"
        id="pricing"
      >
        <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
            Simple, transparent pricing
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            An affordable pricing model that scales with your needs. No hidden
            fees or extra charges.
          </p>
        </div>
        <Payment />
        <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-2">
          <p className="text-center leading-normal text-muted-foreground sm:text-base sm:leading-7">
            shiro is only available to buy with cryptocurrency. For more
            information, please check out our
            <Link href="/faq" className="ml-1 text-primary">
              FAQ
            </Link>
          </p>
          <div className="mt-2 flex flex-row justify-center gap-2"></div>
        </div>
      </section>
    </main>
  )
}
