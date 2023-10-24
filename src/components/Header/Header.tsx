import { ProfileUnauthorized } from "@/components/profile/ProfileUnauthorized";
import Link from "next/link";

export default function Header() {
  return (
    <section>
      <h2 className="text-2xl">Papy<span className="text-primary">rus.</span></h2>
      <div>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      <ProfileUnauthorized />
    </section>
  );
}
