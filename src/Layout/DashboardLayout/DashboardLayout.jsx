import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import classes from "./DashboardLayout.module.css";
import clsx from "clsx";
import { Heading, IconButton } from "@/components/common";
import { IoNotifications } from "react-icons/io5";
const DashboardLayout = ({ heading }) => {
  return (
    <>
      <div className={clsx(classes.header, "space")}>
        <Heading lg primitive0>
          {heading}
        </Heading>
        <IconButton onClick={() => {}}>
          <IoNotifications className={classes.icon} />
        </IconButton>
      </div>
      <Outlet />
      <Navbar />
    </>
  );
};
export default DashboardLayout;
