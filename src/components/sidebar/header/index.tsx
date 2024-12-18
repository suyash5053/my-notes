"use client";

import { useState } from "react";
import Image from "next/image";
import AccountDropdown from "./account-dropdown";
import { Search } from "lucide-react";
import { Input } from "~/components/ui/input";

interface SidebarHeaderProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

function SidebarHeader({ user }: SidebarHeaderProps) {
  const [isSearchValue, setIsSearchValue] = useState("");
  return (
    <div className="flex h-1/6 w-full flex-col gap-5">
      <div className="flex items-center justify-between rounded-lg bg-white p-2">
        <Image src={`${user.avatar}`} alt={user.name} width={24} height={24} />
        <div>{user.name}</div>
        <AccountDropdown />
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-white p-1 px-2">
        <Search size={20} />
        <Input
          className="border-none p-0 outline-none focus-visible:ring-transparent"
          placeholder="Search Notes..."
          onChange={(e) => setIsSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SidebarHeader;
