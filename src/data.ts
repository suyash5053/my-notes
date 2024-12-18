import {
  BookOpenText,
  Check,
  FolderKanban,
  NotepadText,
  Pencil,
} from "lucide-react";

export const data = {
  user: {
    name: "Suyash",
    email: "abc@gmail.com",
    avatar: "/assets/suyash.jpg",
  },
  sidebarItems: [
    {
      title: "My Notes",
      icon: NotepadText,
      url: "/my-notes",
    },
    {
      title: "To-do List",
      icon: Check,
      url: "/todo-list",
    },
    {
      title: "Projects",
      icon: FolderKanban,
      url: "/projects",
    },
    {
      title: "Journal",
      icon: Pencil,
      url: "/journal",
    },
    {
      title: "Reading List",
      icon: BookOpenText,
      url: "/reading-lists",
    },
  ],
};
