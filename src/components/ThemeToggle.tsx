'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    if (stored === 'dark') {
      setDark(true)
      document.documentElement.classList.add('dark')
    } else if (stored === 'light') {
      setDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      // follow system
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      setDark(prefersDark)
      if (prefersDark) document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-2 bg-slate-100 dark:bg-slate-700 rounded-md text-sm"
      aria-pressed={dark}
      aria-label="Toggle dark mode"
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
