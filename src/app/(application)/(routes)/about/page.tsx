import CardAbout from "../../_components/CardAbout";
import Image from "next/image";
import AboutStatusItems from "../../_components/AboutstatusItems";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="flex flex-col">
      <Separator />
      <h1 className="py-4 text-4xl font-bold text-center text-white bg-primary dark:bg-transparent">
        About
      </h1>
      <section className="container flex flex-col items-center justify-center lg:flex-row py-12 gap-6">
        <div className="flex flex-col gap-4 w-1/2">
          <p className="font-semibold">Welcome to Papyrus</p>
          <h1 className="text-3xl font-bold">
            Turning Your Inspiration into Expression with Text on Paper
          </h1>
        </div>
        <p className="w-1/2 italic">
          The Papyrus project is a creative exploration that was born from
          inspiration in Notion, a powerful digital text editing tool. This
          project aims to bring the versatility and expressiveness of Notion
          into the world of paper design, reimagining how ideas are transformed
          into tangible and inspiring objects.
        </p>
      </section>
      <Separator />
      <div className="flex justify-center gap-16 py-10 flex-wrap bg-primary dark:bg-transparent">
        <CardAbout />
      </div>
      <Separator />
      <section className="flex flex-col justify-between px-16 py-12 lg:flex-row">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Our Mission</h1>
          <p>
            To empower individuals and teams to manage information, projects,
            and collaborations more effectively and flexibly. Papyrus aims to
            provide a versatile and highly customizable platform that enables
            people to create and organize their own productivity and information
            management solutions tailored to their unique needs. This includes
            the creation of documents, databases, to-do lists, notes, and much
            more, all within a single digital environment.
          </p>
        </div>
        <Image src="/rafiki.svg" alt="" width={300} height={300} />
      </section>
      <Separator />
      <div className="flex items-center justify-center py-10 bg-primary dark:bg-transparent">
        <div className="flex flex-col items-center justify-center gap-3 py-8 border-2 border-white rounded-lg w-[95%]">
          <h1 className="text-4xl font-normal text-white ml-7">
            Edit all your texts with Papyrus.
          </h1>
          <p className="text-white">Start right now, and dont delay.</p>
        </div>
      </div>
      <Separator />
      <div className="container flex flex-wrap gap-12 my-12 justify-center">
        <AboutStatusItems />
      </div>
    </div>
  );
}
