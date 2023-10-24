import { ProfileUnauthorized } from "@/components/profile/Profile";
import Link from "next/link";
import { Button } from "../ui/Button";

export default function Header() {
  return (
    <section className="flex items-center justify-between py-2">
      <h2 className="text-2xl font-bold">Papy<span className="text-primary">rus.</span></h2>
      <div className="flex item-center gap-2">
        <Link href='/about' className="hover:text-primary">About</Link>
        <Link href='/contact' className="hover:text-primary">Contact</Link>
      </div>
      <ProfileUnauthorized />
    </section>
  );
}
