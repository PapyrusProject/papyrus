import { ReactNode } from "react";
import { PiPencilLineBold, PiPaintBrushBold, PiBooks, PiDatabaseBold, PiDevices, PiHourglassHighBold, PiWrenchBold, PiStrategy } from "react-icons/pi";


export type IProps = {
    id?: number,
    icon?: ReactNode,
    title?: String,
    paragraph?: string
}[]

const itens: IProps = [
    {
        id: 1,
        icon: <PiPencilLineBold />,
        title: 'Writing and Editing',
        paragraph: "Create and enhance content effectively in a simplified editing environment."
    },
    {
        id: 2,
        icon: <PiPaintBrushBold />,
        title: "Customization",
        paragraph: "Customize the system according to your needs and preferences."
    },
    {
        id: 3,
        icon: <PiBooks />,
        title: "Organization",
        paragraph: "Keep information and tasks organized, enabling quick and efficient access."
    },

    {
        id: 4,
        icon: <PiStrategy />,
        title: "Planning",
        paragraph: "Effortlessly create and track deadlines and tasks for projects and goals."
    },

    {
        id: 5,
        icon: <PiDatabaseBold />,
        title: "Database",
        paragraph: "Store and manage information in a structured manner for easy reference."
    },

    {
        id: 6,
        icon: <PiDevices />,
        title: "All Devices",
        paragraph: "Access your information and work from anywhere, on all devices."
    },

    {
        id: 7,
        icon: <PiHourglassHighBold />,
        title: "Progress Tracking",
        paragraph: "Visualize your progress clearly, maintaining focus and motivation."
    },

    {
        id: 8,
        icon: <PiWrenchBold />,
        title: "Reference Organization",
        paragraph: "Keep all research resources well-organized and accessible."
    },
]

export default function AboutStatusItems() {
    return (
        <>
            {itens.map(
                (i) => {
                    return (
                        <div key={i.id} className="flex flex-col items-center justify-center w-64 gap-4 text-center mx-auto">
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary">
                                <div className="text-5xl text-white">
                                    {i.icon}
                                </div>
                            </div>
                            <h3 className="font-bold">{i.title}</h3>
                            <p>
                                {i.paragraph}
                            </p>
                        </div>
                    )
                }
            )}
        </>
    )
}