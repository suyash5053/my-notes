"use client";

import { Ellipsis, Pen, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Button } from "~/components/ui/button";

function ItemOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="rounded-md hover:bg-zinc-300">
        <Ellipsis size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-1 p-1">
        <DropdownMenuItem className="p-0">
          <Button variant={"outline"} size={"lg"} className="flex w-full">
            <Pen size={20} />
            Edit
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <Button variant={"outline"} size={"lg"} className="hover:bg-red-400">
            <Trash2 size={20} />
            Delete
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ItemOptions;
