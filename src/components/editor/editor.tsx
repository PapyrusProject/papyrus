"use client";
import { document } from "@/types/notes";
import { useEditor, generateText, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const NoteEditor = ({ note }: document) => {
  const extensions = [StarterKit];

  const editor = useEditor(
    {
      extensions,
      content: note.content,
      onUpdate: ({ editor }) => {
        const editorContent = editor.getJSON();
        const firstNodeContent = editorContent.content?.[0];
        onChange(
          editorContent,
          firstNodeContent && generateText(firstNodeContent, extensions)
        );
      },
    },
    [note.id]
  );

  return (
    <div>
      <EditorContent editor={editor} className="overflow-auto" />
    </div>
  );
};
