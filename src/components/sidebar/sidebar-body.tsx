import { Ellipsis, type LucideIcon } from "lucide-react";

interface SidebarBodyProps {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
  }[];
}

function SidebarBody({ items }: SidebarBodyProps) {
  return (
    <div className="flex h-3/5 flex-col justify-center">
      {items.map((item) => (
        <div
          key={item.title}
          className="hover:bg-zinc-200active:bg-zinc-200 flex justify-between rounded-md"
        >
          <item.icon />
          <div>{item.title}</div>
          <Ellipsis />
        </div>
      ))}
    </div>
  );
}

export default SidebarBody;
