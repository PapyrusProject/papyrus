import { Button } from "@/components/ui/Button";
import { CardHomePage } from "@/components/ui/CardHomePage";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineComputerDesktop, HiCodeBracket } from "react-icons/hi2";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import Link from "next/link";

const cardList = [
  {
    id: 1,
    title: "Built for developers",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid magnam dolorem pariatur adipisci? Sit animi tempora qui architecto fuga autem nisi iusto sunt dolor nesciunt soluta praesentium sed, molestias facere?",
    icon: <HiOutlineComputerDesktop size={28} color="#335EEA"/>
  },
  {
    id: 2,
    title: "Designed to be modern",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid magnam dolorem pariatur adipisci? Sit animi tempora qui architecto fuga autem nisi iusto sunt dolor nesciunt soluta praesentium sed, molestias facere?",
    icon: <HiOutlineViewGridAdd size={28} color="#335EEA"/>
  },
  {
    id: 3,
    title: "Documentation for everything",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid magnam dolorem pariatur adipisci? Sit animi tempora qui architecto fuga autem nisi iusto sunt dolor nesciunt soluta praesentium sed, molestias facere?",
    icon: <HiCodeBracket size={28} color="#335EEA"/>
  }
]

export default function Home() {
  return (
      <section className="flex flex-col gap-6 container my-16">
        <p className="text-secondary text-sm">Plan for growth</p>
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-primary">Papyrus.</span>
        </h1>
        <h2 className="text-2xl font-semibold">Your Text Organization and Editing Platform.</h2>
        <p className="w-2/3 text-sm">
          All-in-one Text Organization and Editing Platform. Streamline your workflow with intuitive note-taking,
          task management, and seamless document editing. Boost your productivity and creativity with Papyrus today, <Link className="text-primary" href="/about">Click here</Link> to learn more.
        </p>
        <section className="flex mt-8 gap-2 md:w-[50%]">
          <Button size="xl" variant="blue">View All Pages <AiOutlineArrowRight size={18} color="#fff"/> </Button>
          <Button size="xl" variant="lightBlue">Documentation</Button>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {
            cardList.map((card) => (
              <CardHomePage key={card.id} Title={card.title} paragraph={card.paragraph} icon={card.icon} />
            ))
          }
        </section>
      </section>
  )
}