"use client";
import { Button } from "@/components/ui/Button";
import { CardHomePage } from "@/app/(application)/_components/CardHomePage";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <section className="container flex flex-col items-center gap-6 my-16">
        <section className="flex flex-col items-center text-center gap-3">
          <p className="text-sm text-primary">Plan for growth</p>
          <h1 className="text-4xl font-bold">
            Welcome to <span>Papyrus.</span>
          </h1>
          <h2 className="text-2xl font-semibold">
            Your Text Organization and Editing Platform.
          </h2>
          <p className="w-2/3 text-sm">
            All-in-one Text Organization and Editing Platform. Streamline your
            workflow with intuitive note-taking, task management, and seamless
            document editing. Boost your productivity and creativity with
            Papyrus today.
          </p>
          <div className="flex gap-2">
            <Button size="lg" className="flex items-center gap-2">
              Notes
              <AiOutlineArrowRight />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push("/about")}
            >
              About us
            </Button>
          </div>
        </section>
      <section className="flex items-center justify-center flex-wrap gap-4">
        <CardHomePage />
      </section>
    </section>
  );
}
