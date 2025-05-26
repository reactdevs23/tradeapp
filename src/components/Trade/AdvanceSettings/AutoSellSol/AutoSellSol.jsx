import { autoSellIcon } from "@/images";
import SellBox from "../SellBox/SellBox";
import classes from "./AutoSellSol.module.css";
import { useState } from "react";
import { handleKeyDown } from "@/utils/utils";
import SellWhen from "../SellWhen/SellWhen";
import { Input, Line, Text } from "@/components/common";
import WhatToSell from "../WhatToSell/WhatToSell";

const AutoSellSol = () => {
  const [autoSell, setAutoSell] = useState(false);

  const [targetValue, setTargetValue] = useState("");
  return (
    <div className={classes.wrapper}>
      <SellBox
        bg="#E05555"
        icon={autoSellIcon}
        heading="Auto-sell SOL"
        checked={autoSell}
        setChecked={setAutoSell}
      />{" "}
      {autoSell && (
        <>
          <Line className={classes.line} />
          <SellWhen />
          <Line className={classes.line} />
          <div className={classes.targetValue}>
            <Text lsm primitive400>
              Target Value
            </Text>
            <div className={classes.inputWrapper}>
              <Input
                className={classes.input}
                type="number"
                onKeyDown={handleKeyDown}
                placeholder="10"
                value={targetValue}
                setValue={setTargetValue}
              />{" "}
              <span className={classes.percentIcon}>%</span>
            </div>
          </div>{" "}
          <Line className={classes.line} />
          <WhatToSell />
        </>
      )}
    </div>
  );
};
export default AutoSellSol;
