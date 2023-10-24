import { ProfileUnauthorized } from "@/components/profile/ProfileUnauthorized";
import Link from "next/link";

export default function Header() {
  return (
    <section className="flex items-center justify-between">
      <h2 className="text-2xl">Papy<span className="text-primary">rus.</span></h2>
      <div>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      <ProfileUnauthorized />
    </section>
  );
}
