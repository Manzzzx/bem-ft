'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"
import { MoonIcon, SunIcon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(theme === "dark")
  }, [theme])

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
    setIsDark(checked)
  }

  return (
    <div className="flex items-center gap-2">
      <SunIcon className="h-4 w-4" />
      <Switch checked={isDark} onCheckedChange={toggleTheme} />
      <MoonIcon className="h-4 w-4" />
    </div>
  )
}
export default ThemeToggle