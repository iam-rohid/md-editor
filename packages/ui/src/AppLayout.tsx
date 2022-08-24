import { Outlet, Link } from "@tanstack/react-location";
import Sidebar from "./components/sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
