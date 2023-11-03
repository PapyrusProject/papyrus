import { ThemePicker } from "@/app/(settings)/_components/themesPicker"
import { Separator } from "@/components/ui/separator"

const Appearence = () => {
  return(
      <section>
      <div>
          <h1 className="text-xl my-6">Settings</h1>
          <Separator />
      </div>
        <ThemePicker />
      </section>
  )
}

export default Appearence