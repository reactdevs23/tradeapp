import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Tabs.module.css";
import clsx from "clsx";
import { IconButton } from "@/components/common";
import { FaAngleLeft } from "react-icons/fa";

const Tabs = ({ tabs, invited, activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className={clsx(classes.header, "space")}>
      <IconButton onClick={handleBack}>
        <FaAngleLeft className={classes.icon} />
      </IconButton>
      <nav className={classes.tabs}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(tab)}
            className={clsx(classes.tab, activeTab === tab && classes.active)}
          >
            {tab} {tab === "Invited" && `(${invited})`}
          </button>
        ))}
      </nav>
      <div className={classes.side}></div>
    </header>
  );
};
export default Tabs;
