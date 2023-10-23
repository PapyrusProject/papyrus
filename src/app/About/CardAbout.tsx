import { ReactNode } from "react"
import { PiArticleBold, PiLightbulbFilamentBold, PiPaletteBold } from "react-icons/pi"

export type IProps = {
    id?: number,
    icon?: ReactNode,
    title?: string,
    paragraph?: string
}[]

const itens: IProps = [
    {
        id: 1,
        icon: <PiLightbulbFilamentBold />,
        title: "Continuous Innovation",
        paragraph: "Incorporating new ideas and technologies as they emerge"
    },
    {
        id: 2,
        icon: <PiArticleBold />,
        title: "Facilitating Creativity",
        paragraph: "We want to simplify the paper creation process."
    },
    {
        id: 3,
        icon: <PiPaletteBold />,
        title: "Functionality and Beauty",
        paragraph: "Functionality with an attractive interface"
    },

]

export default function CardAbout() {
    return (
        <>
            {itens.map(
                (i) => {
                    return (
                        <div key={i.id} className="flex flex-col items-center gap-4 px-6 py-20 bg-white w-[90%] xsm:w-96 h-80 rounded-xl">
                            <div className="text-primary text-7xl">
                                {i.icon}
                            </div>
                            <h2 className="text-2xl font-semibold">{i.title}</h2>

                            <p className="text-center">
                                {i.paragraph}
                            </p>

                        </div>
                    )
                }
            )}
        </>
    )
}