"use client";

import * as React from "react";
import { BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react";

import { NavMain } from "~/components/nav-main";
import { NavUser } from "~/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Suyash",
    email: "abc@example.com",
    avatar: "/avatars/suyash.jpg",
  },
  navMain: [
    {
      title: "My Notes",
      url: "/my-notes",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Todo List",
      url: "/todo-list",
      icon: Bot,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: BookOpen,
    },
    {
      title: "Journal",
      url: "/journal",
      icon: Settings2,
    },
    {
      title: "Reading List",
      url: "/reading-list",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
