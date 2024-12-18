import Sidebar from "../sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
