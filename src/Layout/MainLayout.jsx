import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import classes from "./MainLayout.module.css";

import Overlay from "@/components/common/Overlay/Overlay";
const MainLayout = () => {
  return (
    <main className={classes.wrapper}>
      <Outlet />

      <Overlay />
    </main>
  );
};
export default MainLayout;
