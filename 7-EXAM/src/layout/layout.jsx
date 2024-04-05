import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar.jsx";

const Layout = () => {
  return (
    <>
      <Sidebar />

      <main style={{ paddingLeft: "240px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
