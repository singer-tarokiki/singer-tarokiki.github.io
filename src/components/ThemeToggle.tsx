"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-silver/30 bg-transparent text-sm font-medium text-silver"
        suppressHydrationWarning
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-silver/30 bg-ink-soft/40 text-sm font-medium transition-all hover:border-amethyst-light/60 hover:bg-amethyst/20 hover:shadow-[0_0_20px_rgba(157,116,217,0.5)] focus:outline-none focus:ring-2 focus:ring-amethyst-light/40 focus:ring-offset-0",
        "text-silver"
      )}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-0 transition-all light:rotate-0 light:scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all light:-rotate-90 light:scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
