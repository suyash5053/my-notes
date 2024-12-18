import { data } from "~/data";
import SidebarBody from "./sidebar-body";
import SidebarFooter from "./sidebar-footer";
import SidebarHeader from "./sidebar-header";

function Sidebar() {
  return (
    <div className="flex h-screen w-1/5 flex-col justify-between border bg-zinc-100 p-4">
      <SidebarHeader />
      <SidebarBody items={data.sidebarItems} />
      <SidebarFooter />
    </div>
  );
}

export default Sidebar;
