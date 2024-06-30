"use client"

import { useEffect } from "react"
import { ReactLenis } from "@studio-freight/react-lenis"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { Toaster } from "@/components/ui/toaster"

export function Providers({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault()
    })
  })

  return (
    <NextThemesProvider {...props}>
      <ReactLenis
        root
        options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
      >
        {children}
        <Toaster />
      </ReactLenis>
    </NextThemesProvider>
  )
}
