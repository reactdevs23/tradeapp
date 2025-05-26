import { IconButton, Line, Text } from "@/components/common";
import classes from "./AdvanceSettings.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import SellBox from "./SellBox/SellBox";
import { useState } from "react";
import { scheduleTradeIcon } from "@/images";
import clsx from "clsx";
import AutoSellSol from "./AutoSellSol/AutoSellSol";
import ScheduleTrade from "./ScheduleTrade/ScheduleTrade";

const AdvanceSettings = () => {
  const [showAdvanceSettings, setShowAdvanceSettings] = useState(false);
  return (
    <div className={classes.wrapper}>
      <div
        className={clsx(classes.header, showAdvanceSettings && classes.active)}
        onClick={() => setShowAdvanceSettings((prev) => !prev)}
      >
        <IconButton>
          {" "}
          <IoSettingsOutline className={classes.icon} />
        </IconButton>

        <Text lsm primitive400>
          Advance settings
        </Text>
        <IconButton>
          {showAdvanceSettings ? (
            <FaAngleUp className={classes.icon} />
          ) : (
            <FaAngleDown className={classes.icon} />
          )}
        </IconButton>
      </div>
      {showAdvanceSettings && (
        <>
          <AutoSellSol />
          <ScheduleTrade />
        </>
      )}
    </div>
  );
};
export default AdvanceSettings;
