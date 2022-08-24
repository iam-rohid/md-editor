import { Outlet, Link } from "@tanstack/react-location";
import Sidebar from "./components/sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
