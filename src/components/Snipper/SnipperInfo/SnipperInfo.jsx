import { Tabs } from "@/components/common";
import classes from "./SniprInfo.module.css";
import { useState } from "react";
import Logs from "./Logs/Logs";
import { logEntries, snipperTransaction } from "@/data/data";
import SnipperTransaction from "./SnipperTransaction/SnipperTransaction";
const tabs = ["Logs", "Currently Invested", "Transacition"];
const SnipperInfo = () => {
  const [activeTab, setActiveTab] = useState("Logs");
  return (
    <div className={classes.wrapper}>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        className={classes.tabs}
      />

      {activeTab === "Logs" && <Logs data={logEntries} />}
      {activeTab === "Transacition" && (
        <SnipperTransaction data={snipperTransaction} />
      )}
    </div>
  );
};
export default SnipperInfo;
