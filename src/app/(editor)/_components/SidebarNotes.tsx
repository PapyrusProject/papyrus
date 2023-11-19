"use client";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import {BiSolidRightArrow} from 'react-icons/bi'
import { notesProps } from "@/types/notes";


export default function SidebarNotes() {
  const [notes, setNotes] = useState<Record<string, notesProps>>({});
    const[activeId, setActiveId] =useState<string | null>(null)

    const createNote = () => {
        const newNote = {
            id: uuid(),
      title: "nova nota",
      content: "<h1>Mgilson testador</h1>",
      updateAt: new Date(),
    };

    setNotes((note) => ({
      ...note,
      [newNote.id]: newNote,
    }));
};

const notesList = Object.values(notes).sort(
    (a, b) => b.updateAt.getTime() - a.updateAt.getTime()
    );
    

    const handleActiveNote = (id: string) => {
        setActiveId(id)
    }


  return (  
    <div className="flex flex-col p-2 w-60 border-r border-r-primary gap-2">
      <h1>Sidebar</h1>
      <div>
        <Button onClick={createNote}>Create note</Button>
        {notesList.map((notes) => (
          <div
          role="button"
            onClick={() => handleActiveNote(notes.id)}
          className={` flex items-center p-2 gap-1 mt-2 ${notes.id === activeId ? 'bg-secondary' : ''}`}
          >
            <BiSolidRightArrow className={`w-4 h-4 focus:origin-bottom-right ${notes.id === activeId ? 'rotate-90' : ''} `}/>
            {notes.title}
          </div>
        ))}
      </div>
    </div>
  );
}
