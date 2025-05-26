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
            [classes.gain]: tab === "Gain" && activeTab === "Gain",
            [classes.loss]: tab === "Loss" && activeTab === "Loss",
          })}
        >
          % {tab}
        </button>
      ))}
    </div>
  );
};
export default Tabs;
