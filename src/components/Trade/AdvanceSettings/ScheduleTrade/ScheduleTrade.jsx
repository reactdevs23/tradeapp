import { useState } from "react";
import classes from "./ScheduleTrade.module.css";
import SellBox from "../../../common/SellBox/SellBox";
import { scheduleTradeIcon } from "@/images";
import { Line, WarningContainer, DateTimeInput } from "@/components/common";
const ScheduleTrade = () => {
  const [scheduleTrade, setScheduleTrade] = useState(false);
  return (
    <div className={classes.wrapper}>
      <SellBox
        icon={scheduleTradeIcon}
        heading="Schedule trade"
        checked={scheduleTrade}
        setChecked={setScheduleTrade}
      />
      {scheduleTrade && (
        <>
          <DateTimeInput />
          <Line className={classes.line} />

          <WarningContainer type2>
            Using this feature will allow you execute this trade at a later
            date. Trade may fail if balance is not enough on the said date.
          </WarningContainer>
        </>
      )}
    </div>
  );
};
export default ScheduleTrade;
