import classes from "./Tabs.module.css";
import clsx from "clsx";

const Tabs = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className={classes.tabs}>
      {tabs.map((tab, i) => (
        <button
          onClick={() => setActiveTab(tab)}
          key={i}
          className={clsx(classes.tab, {
            [classes.active]: tab === activeTab,
          })}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
export default Tabs;
