import CardAbout from "./CardAbout";
import Image from "next/image";
import AboutStatusItems from "./AboutstatusItems";

export default function About() {
    return (
        <div className="flex flex-col">
            <h1 className="w-full p-4 text-5xl font-bold text-center text-white bg-primary">About</h1>
            <div
                className="flex flex-col items-center justify-center w-full px-8 py-16 gap-12 lg:gap-48 lg:flex-row lg:px-16"
            >
                <div className="flex flex-col w-3/4 gap-5 text-center lg:text-left">
                    <p className="font-semibold text-primary">
                        Welcome to Papyrus
                    </p>
                    <h1 className="text-4xl font-bold">
                        Turning Your Inspiration into Expression with Text on Paper
                    </h1>
                </div>
                <div className="w-3/4 text-left lg:text-justify">
                    <p>
                        The Papyrus project is a creative exploration that was born from inspiration in Notion, a powerful digital text editing tool. This project aims to bring the versatility and expressiveness of Notion into the world of paper design, reimagining how ideas are transformed into tangible and inspiring objects.
                    </p>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-16 py-10 h-full bg-primary">
                <CardAbout />
            </div>
            <div className="flex flex-col items-center justify-center gap-12 px-16 py-16 lg:gap-48 lg:flex-row">
                <div className="flex flex-col w-3/4 gap-6 text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-primary">
                        Our Mission
                    </h1>
                    <p>
                        To empower individuals and teams to manage information, projects, and collaborations more effectively and flexibly. Papyrus aims to provide a versatile and highly customizable platform that enables people to create and organize their own productivity and information management solutions tailored to their unique needs. This includes the creation of documents, databases, to-do lists, notes, and much more, all within a single digital environment.
                    </p>
                </div>
                <Image src='/rafiki.svg' alt="" width={300} height={300} />
            </div>
            <div className="flex items-center justify-center py-10 bg-primary">
                <div className="flex flex-col items-center justify-center gap-3 py-8 border-2 border-white rounded-lg w-[95%]">
                    <h1 className="text-4xl font-normal text-white ml-7">Edit all your texts with Papyrus.</h1>
                    <p className="text-white">Start right now, and don't delay.</p>


                </div>
            </div>
            <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 md:grid-rows-4 
      xl:grid-cols-4 xl:grid-rows-2 w-[80%] gap-6 py-12 m-auto">
                <AboutStatusItems />
            </div>
        </div>
    )
}