import './globals.css'
import type { Metadata } from 'next'
import { Spline_Sans, Spline_Sans_Mono } from 'next/font/google'

import { Header } from "../components/Header"

const splineSans = Spline_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spline-sans',
  weight: ['400', '600'],
  preload: true,
})
const splineSansMono = Spline_Sans_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spline-mono',
  weight: ['400', '600'],
  preload: true,
})

export const metadata: Metadata = {
  title: 'Daccord | 3d Interactive Design',
  description: 'An interactive 3d design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${splineSans.className} ${splineSansMono.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
