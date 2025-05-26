import { Outlet } from "react-router-dom";
import classes from "./TradeLayout.module.css";
import NavItems from "./NavItems/NavItems";

const TradeLayout = () => {
  return (
    <div>
      <NavItems />
      <Outlet />
    </div>
  );
};
export default TradeLayout;
