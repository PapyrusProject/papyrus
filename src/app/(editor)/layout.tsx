import HeaderEditor from "./_components/HeaderEditor";
import SidebarConfig from "./_components/SidebarConfig";
import SidebarNotes from "./_components/SidebarNotes";

export default function EditorLayout({children}: {children : React.ReactNode}) {
    return(
        <div className="min-h-screen flex">
            <SidebarConfig/>
            <SidebarNotes/>
            <div className="flex flex-col">
                <HeaderEditor/>
                {children}
            </div>
        </div>
    )
}