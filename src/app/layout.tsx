//style
import './globals.css'

//SEO
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

//providers
import Provider from '@/lib/auth/provider'

//components
import LoginModal from '@/components/Modal/LoginModal'
import Header from '@/components/Header/Header'

//font
const inter = Inter({ subsets: ['latin'] })

//metadata
export const metadata: Metadata = {
  title: "Papyrus",
  description: "O melhor gerenciador de notas já feito na humanidade humana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <Provider>
        <body
          className={`flex flex-col min-h-screen items-center text-content bg-background ${inter.className}`}
        >
          <header className="container">
            <Header />
          </header>
          <main className='grow flex items-center'>
            {children}
            <LoginModal />
          </main>
          <footer className='container flex items-center'>
            <p>
              Copyright@ papyprus
            </p>
          </footer>
        </body>
      </Provider>
    </html>
  );
}
