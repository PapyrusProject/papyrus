import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";
import Provider from "@/lib/auth/provider";

const inter = Inter({ subsets: ["latin"] });

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
          <main className="grow container flex items-center">{children}</main>
          <footer className="container flex items-center">
            <p>Copyright@ papyprus</p>
          </footer>
        </body>
      </Provider>
    </html>
  );
}
