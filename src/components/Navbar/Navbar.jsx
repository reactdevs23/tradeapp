import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

import {
  AccountIcon,
  HomeIcon,
  MarketsIcon,
  TradeIcon,
  WalletIcon,
} from "@/images";
import { Text } from "@/components/common";
import clsx from "clsx";

const navItems = [
  { Icon: HomeIcon, item: "Home", to: "/" },
  { Icon: MarketsIcon, item: "Markets", to: "/markets" },
  { Icon: TradeIcon, item: "Trade", to: "/trade" },
  { Icon: WalletIcon, item: "Wallet", to: "/wallet" },
  { Icon: AccountIcon, item: "Account", to: "/account" },
];

const Navbar = () => {
  return (
    <nav className={clsx(classes.navItems)}>
      {navItems.map(({ Icon, item, to }, i) => (
        <NavLink
          key={i}
          to={to}
          className={({ isActive }) =>
            clsx(classes.navItem, { [classes.active]: isActive })
          }
          style={({ isActive }) => ({
            color: isActive ? "#0085FF" : "#A5A5A5",
          })}
        >
          <div className={classes.iconContainer}>
            <Icon color="currentColor" />
          </div>
          <Text primitive400 medium xxs className={classes.item}>
            {item}
          </Text>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
