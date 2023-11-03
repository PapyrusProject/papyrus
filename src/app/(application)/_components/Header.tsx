import { Sessions } from "@/app/(application)/_components/Profile";
import { ModeToggle } from "@/components/ui/modeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <section className="flex items-center justify-between py-2">
      <Link href='/' className="text-4xl font-bold">Papy<span className="text-primary">rus.</span></Link>
      <div className="flex gap-6 justify-center items-center">
      <Sessions />
      <ModeToggle />
      </div>
    </section>
  );
}
