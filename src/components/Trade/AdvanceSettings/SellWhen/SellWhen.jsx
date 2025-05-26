import { CircularCheckBox, Text } from "@/components/common";
import classes from "./SellWhen.module.css";
import clsx from "clsx";
import { useState } from "react";
import { MdPercent } from "react-icons/md";
import Tabs from "../Tabs/Tabs";
import { FiTrendingUp } from "react-icons/fi";

const SellWhen = () => {
  const [percentageActive, setPercentageActive] = useState(true);
  const [priceActive, setPriceActive] = useState(false);
  const [activeTab, setActiveTab] = useState("Gain");
  return (
    <div className={classes.sellWhenContainer}>
      <Text primitive400 lsm>
        Sell When
      </Text>
      <div className={classes.container}>
        <div
          className={clsx(
            classes.percentage,
            classes.box,
            percentageActive && classes.activeBox
          )}
        >
          <CircularCheckBox
            checked={percentageActive}
            setChecked={setPercentageActive}
          />

          <Text lsm blue50 medium className={classes.label}>
            <MdPercent className={classes.icon} />
            Percentage
          </Text>
          <Tabs
            tabs={["Gain", "Loss"]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div
          className={clsx(
            classes.box,
            classes.price,
            priceActive && classes.activeBox
          )}
        >
          <CircularCheckBox checked={priceActive} setChecked={setPriceActive} />
          <Text lsm blue50 medium className={classes.label}>
            <FiTrendingUp className={classes.icon} />
            Price
          </Text>
        </div>{" "}
      </div>
    </div>
  );
};
export default SellWhen;
