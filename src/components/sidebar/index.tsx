"use client";

import { data } from "~/data";
import SidebarBody from "./body";
import SidebarFooter from "./footer";
import SidebarHeader from "./header";

//TODO: Make the sidebar a resizable component use Shadcn resizable.
//TODO: Add a button to close the sidebar.

function Sidebar() {
  return (
    <div className="flex h-screen w-1/6 flex-col justify-between border bg-zinc-100 p-4">
      <SidebarHeader user={data.user} />
      <SidebarBody items={data.sidebarItems} />
      <SidebarFooter />
    </div>
  );
}

export default Sidebar;
