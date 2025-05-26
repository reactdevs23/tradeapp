import { NavLink } from "react-router-dom";
import classes from "./NavItems.module.css";

import { receiveIcon, sendIcon, swapIcon, tradeIcon } from "@/images";
import { Text } from "@/components/common";
import clsx from "clsx";

const navItems = [
  { icon: receiveIcon, item: "Receive", to: "/receive" },
  { icon: sendIcon, item: "Send", to: "/send" },
  { icon: swapIcon, item: "Swap", to: "/swap" },
  { icon: tradeIcon, item: "Trade", to: "/trade" },
];

const NavItems = () => {
  return (
    <nav className={clsx(classes.navItems, "space")}>
      {navItems.map(({ icon, item, to }, i) => (
        <NavLink to={to} key={i} className={classes.navItem}>
          <div className={classes.iconContainer}>
            <img src={icon} alt="#" className={classes.icon} />
          </div>
          <Text primitive400 medium xs className={classes.item}>
            {item}
          </Text>
        </NavLink>
      ))}
    </nav>
  );
};
export default NavItems;
