import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import classes from "./MainLayout.module.css";

import Overlay from "@/components/common/Overlay/Overlay";
import clsx from "clsx";
const MainLayout = ({ noPadding }) => {
  return (
    <main className={clsx(classes.wrapper, noPadding && classes.noPadding)}>
      <Outlet />

      <Overlay />
    </main>
  );
};
export default MainLayout;
