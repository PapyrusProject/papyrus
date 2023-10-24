import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header/Header'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`flex flex-col min-h-screen items-center text-content bg-primary ${inter.className}`}>
        <header className='container'>
          <Header />
        </header>
        <main className='grow container'>
        {children}
        </main>
        <footer className='container'>
          <p>
            Copyright@ papyprus
          </p>
        </footer>
        </body>
    </html>
  )
}
