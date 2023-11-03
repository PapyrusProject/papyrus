import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound(){

  return (
    <div className="flex justify-center items-center flex-col container gap-8">
      <h1 className="font-bold text-9xl text-primary">404</h1>
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-bold text-5xl md:text-6xl text-center">Oopsss! Page Not Found</h2>
        <p className="font-bold text-xl text-center">We couldn&lsquo;t find the page you are looking for</p>
      </div>
      <Link href="/">
        <Button>
          Go to home page
        </Button>
      </Link>
    </div>
  )
}
