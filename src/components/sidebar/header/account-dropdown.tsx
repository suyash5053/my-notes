import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

function AccountDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="rounded-md hover:bg-zinc-200">
        <ChevronDown size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccountDropdown;
