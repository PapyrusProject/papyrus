// React
import { ReactNode } from "react";

// Components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// icons
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { HiCodeBracket, HiOutlineComputerDesktop } from "react-icons/hi2";

interface CardProps {
  id: number,
  icon: ReactNode,
  title: string,
  paragraph: string,
}

export const CardHomePage = () => {
  return (
    <>
    {cardList.map((item: CardProps) => (
    <Card className="w-96 shadow-lg hover:shadow-primary hover:translate-x-1 hover:-translate-y-1 cursor-default" key={item.id}>
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col gap-3">
            <div className="text-primary">{item.icon}</div>
            <p className="whitespace-nowrap">{item.title}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{item.paragraph}</p>
      </CardContent>
    </Card>))}
  </>
  );
}

const cardList: CardProps[] = [
  {
      id: 1,
      title: "Built for developers",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid magnam dolorem pariatur adipisci? Sit animi tempora qui architecto fuga autem nisi iusto sunt dolor nesciunt soluta praesentium sed, molestias facere?",
      icon: <HiOutlineComputerDesktop size={28} />
  },
  {
      id: 2,
      title: "Designed to be modern",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid magnam dolorem pariatur adipisci? Sit animi tempora qui architecto fuga autem nisi iusto sunt dolor nesciunt soluta praesentium sed, molestias facere?",
      icon: <HiOutlineViewGridAdd size={28} />
  },
  {
      id: 3,
      title: "Documentation for everything",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid magnam dolorem pariatur adipisci? Sit animi tempora qui architecto fuga autem nisi iusto sunt dolor nesciunt soluta praesentium sed, molestias facere?",
      icon: <HiCodeBracket size={28} />
  },
]
