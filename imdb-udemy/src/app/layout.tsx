import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Providers from './Providers'

export const metadata: Metadata = {
  title: 'IMDb Udemy',
  description: 'A movie website clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header/>
          
          {children}
        </Providers>
      </body>
    </html>
  )
}
