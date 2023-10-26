import Link from "next/link";
import { PiGithubLogoFill, PiDiscordLogoFill } from "react-icons/pi";

export default function Footer() {
    return (
        <div className="flex justify-center items-center gap-4">
            <p>
                Copyright@ papyprus
            </p>
            <Link href='https://github.com/PapyrusProject/papyrus'>
                <PiGithubLogoFill className="text-primary text-4xl" />
            </Link>
            <Link href="https://discord.gg/QcraJAg9">
                <PiDiscordLogoFill className="text-primary text-4xl" />
            </Link>
        </div>
    )
}