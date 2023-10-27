import { ReactNode } from "react"

interface CardProps{
  icon: ReactNode,
  Title: string,
  paragraph: string
}

export function CardHomePage(props:CardProps){

  return(
    <div className="flex flex-col gap-3 w-full items-center md:items-start">
      {
        props.icon
      }
      <h3 className="text-xl font-medium">
        {
          props.Title
        }
      </h3>
      <p className="text-center md:text-left">
        {
          props.paragraph
        }
      </p>
    </div>
  )
}
