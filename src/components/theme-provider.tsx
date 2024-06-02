"use client"

import * as React from "react"
import { useEffect } from "react"
import { ReactLenis } from "@studio-freight/react-lenis"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

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
      </ReactLenis>
    </NextThemesProvider>
  )
}
