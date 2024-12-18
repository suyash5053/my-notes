"use client";

import { type LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import ItemOptions from "./item-options";
import { Button } from "~/components/ui/button";

interface SidebarBodyProps {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
  }[];
}

// TODO: Set active menu colour to tell which item is currently selected
// TODO: Currently the item dropdown is not working

function SidebarBody({ items }: SidebarBodyProps) {
  const router = useRouter();
  return (
    <div className="flex h-4/6 flex-col justify-center gap-5">
      {items.map((item) => (
        <Button
          variant={"outline"}
          key={item.title}
          className="flex w-full items-center justify-between rounded-lg p-2"
          onClick={() => router.push(item.url)}
        >
          <div className="flex w-full items-center gap-4">
            <item.icon size={20} />
            <div>{item.title}</div>
          </div>
          <ItemOptions />
        </Button>
      ))}
    </div>
  );
}

export default SidebarBody;
