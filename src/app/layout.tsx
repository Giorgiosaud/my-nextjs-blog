import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/globals/NavBar/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Giorgiosaud Blog',
  description: 'A Web development Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}
