import { SidebarMenuButton } from "./ui/sidebar";

function MenuButton({ children }: { children: React.ReactNode }) {
  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      {children}
    </SidebarMenuButton>
  );
}

export default MenuButton;
