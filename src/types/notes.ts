import {JSONContent, Content} from '@tiptap/react'

export type notesProps = {
    id: string;
    title: string;
    content: Content;
    updateAt: Date;
  };

  export type document = {
    note: notesProps,
    onChange: (content: JSONContent ) => void
  }