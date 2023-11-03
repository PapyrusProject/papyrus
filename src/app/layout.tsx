//style
import "./globals.css";

//SEO
import { Inter } from "next/font/google";
import type { Metadata } from "next";

//providers
import Provider from "@/components/providers/Provider";

//font
const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
