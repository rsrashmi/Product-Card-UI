import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Next Product Card',
  description: 'Product Card UI with Tailwind CSS and Framer Motion',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex flex-col items-center p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
