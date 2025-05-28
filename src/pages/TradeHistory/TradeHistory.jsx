import clsx from "clsx";
import classes from "./TradeHistory.module.css";
import HistoryTable from "@/components/Trade/TradeHistory/HistoryTable";
import { transactionsData } from "@/data/data";
import Tabs from "./Tabs/Tabs";
import { useState, useMemo } from "react";
import { Heading } from "@/components/common";
import Overlay from "@/components/common/Overlay/Overlay";

const tabs = ["All", "Buy", "Sell", "Swap"];

const TradeHistory = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = useMemo(() => {
    if (activeTab === "All") return transactionsData;
    return transactionsData.filter(
      (item) => item.type.toLowerCase() === activeTab.toLowerCase()
    );
  }, [activeTab]);

  return (
    <div className={clsx(classes.wrapper, "space")}>
      <Heading lg primitive50 medium>
        Transaction History
      </Heading>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <HistoryTable data={filteredData} />
      <Overlay className={classes.overlay} />
    </div>
  );
};

export default TradeHistory;
