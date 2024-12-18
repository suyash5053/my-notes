"use client";
import { Plus, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

function SidebarFooter() {
  const router = useRouter();
  return (
    <div className="flex h-1/6 flex-col justify-end gap-5 pb-4">
      <Button
        variant={"outline"}
        className="z-10 flex items-center gap-2 rounded-md bg-white p-2"
      >
        <Plus size={20} /> Add new folder
      </Button>
      <Button
        variant={"outline"}
        className="items-centerrounded-md flex gap-2 bg-white p-2"
        onClick={() => router.push("/settings")}
      >
        <Settings size={20} /> Settings
      </Button>
    </div>
  );
}

export default SidebarFooter;
