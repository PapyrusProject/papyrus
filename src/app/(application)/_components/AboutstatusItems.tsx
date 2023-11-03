import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";
import {
  PiPencilLineBold,
  PiPaintBrushBold,
  PiBooks,
  PiDatabaseBold,
  PiDevices,
  PiHourglassHighBold,
  PiWrenchBold,
  PiStrategy,
} from "react-icons/pi";

export type IProps = {
  id?: number;
  icon?: ReactNode;
  title?: String;
  paragraph?: string;
}[];

const itens: IProps = [
  {
    id: 1,
    icon: <PiPencilLineBold size={35} />,
    title: "Writing and Editing",
    paragraph:
      "Create and enhance content effectively in a simplified editing.",
  },
  {
    id: 2,
    icon: <PiPaintBrushBold size={35} />,
    title: "Customization",
    paragraph: "Customize the system according to your needs and preferences.",
  },
  {
    id: 3,
    icon: <PiBooks size={35} />,
    title: "Organization",
    paragraph:
      "Keep information and tasks organized, enabling quick and efficient access.",
  },

  {
    id: 4,
    icon: <PiStrategy size={35} />,
    title: "Planning",
    paragraph:
      "Effortlessly create and track deadlines and tasks for projects and goals.",
  },

  {
    id: 5,
    icon: <PiDatabaseBold size={35} />,
    title: "Database",
    paragraph:
      "Store and manage information in a structured manner for easy reference.",
  },

  {
    id: 6,
    icon: <PiDevices size={35} />,
    title: "All Devices",
    paragraph:
      "Access your information and work from anywhere, on all devices.",
  },

  {
    id: 7,
    icon: <PiHourglassHighBold size={35} />,
    title: "Progress Tracking",
    paragraph:
      "Visualize your progress clearly, maintaining focus and motivation.",
  },

  {
    id: 8,
    icon: <PiWrenchBold size={35} />,
    title: "Reference Organization",
    paragraph: "Keep all research resources well-organized and accessible.",
  },
];

export default function AboutStatusItems() {
  return (
    <>
      {itens.map((i) => {
        return (
          <Card className="py-4 w-72 bg-secondary flex flex-col justify-center shadow-md" key={i.id}>
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    {i.icon}
                  </div>
                  <p className="whitespace-nowrap">{i.title}</p>
                </div>
              </CardTitle>
              <CardDescription>
                <p className="text-center">{i.paragraph}</p>
              </CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </>
  );
}
