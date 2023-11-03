//components
import Footer from "@/app/(application)/_components/Footer";
import Header from "@/app/(application)/_components/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="flex flex-col min-h-screen items-center text-content bg-background">
      <header className="container">
        <Header />
      </header>
      <main className="grow flex items-center">{children}</main>
      <footer className="container flex justify-center relative">
        <Footer />
      </footer>
    </body>
  );
}
