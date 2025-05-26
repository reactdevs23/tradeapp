import { NavLink, useNavigate } from "react-router-dom";
import classes from "./NavItems.module.css";
import clsx from "clsx";
import { IconButton } from "@/components/common";
import { FaAngleLeft } from "react-icons/fa";
import { cartIcon } from "@/images";

const navItems = [
  { navItem: "Trade", to: "/trade" },
  { navItem: "Chart", to: "/chart" },
  { navItem: "History", to: "/history" },
];
const NavItems = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <header className={clsx(classes.header, "space")}>
      <IconButton onClick={handleBack}>
        <FaAngleLeft className={classes.icon} />
      </IconButton>
      <nav className={classes.navItems}>
        {navItems.map(({ navItem, to }, i) => (
          <NavLink
            key={i}
            to={to}
            className={({ isActive }) =>
              clsx(classes.navItem, isActive && classes.active)
            }
          >
            {navItem}
          </NavLink>
        ))}
      </nav>
      <div className={classes.side}>
        <IconButton className={classes.cartContainer}>
          <img src={cartIcon} alt="Cart" className={classes.cartIcon} />
          <p className={classes.itemNumber}>1</p>
        </IconButton>
      </div>
    </header>
  );
};
export default NavItems;
