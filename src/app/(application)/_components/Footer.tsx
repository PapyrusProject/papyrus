"use client";
// Components
import { ContactModal } from "@/components/Modal/ContactModal";

export default function Footer() {
  return (
    <section className="flex my-2">
      <p>Copyright&copy;papyprus</p>
      <div className="hover:underline sm:absolute right-6 bottom-1">
        <ContactModal />
      </div>
    </section>
  );
}
