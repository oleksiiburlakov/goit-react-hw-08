import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar";

const Layout = () => (
  <>
    <AppBar />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;