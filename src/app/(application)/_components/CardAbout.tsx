// React
import { ReactNode } from "react";

// Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PiArticleBold,
  PiLightbulbFilamentBold,
  PiPaletteBold,
} from "react-icons/pi";

export type IProps = {
  id?: number;
  icon?: ReactNode;
  title?: string;
  paragraph?: string;
}[];

export default function CardAbout() {
  return (
    <>
      {itens.map((i) => {
        return (
          <Card className="w-96 h-56 border-primary shadow-sm cursor-default flex flex-col justify-center bg-secondary"
            key={i.id}
          >
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col items-center gap-3">
                  <div className="text-[#335EEA]">{i.icon}</div>
                  <p className="whitespace-nowrap">{i.title}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">{i.paragraph}</p>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}


const itens: IProps = [
    {
      id: 1,
      icon: <PiLightbulbFilamentBold size={40}/>,
      title: "Continuous Innovation",
      paragraph: "Incorporating new ideas and technologies as they emerge",
    },
    {
      id: 2,
      icon: <PiArticleBold size={40} />,
      title: "Facilitating Creativity",
      paragraph: "We want to simplify the paper creation process.",
    },
    {
      id: 3,
      icon: <PiPaletteBold size={40}/>,
      title: "Functionality and Beauty",
      paragraph: "Functionality with an attractive interface",
    },
  ];