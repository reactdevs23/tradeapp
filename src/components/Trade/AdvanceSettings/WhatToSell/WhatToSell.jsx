import { CircularCheckBox, Input, Text } from "@/components/common";
import classes from "./WhatToSell.module.css";
import clsx from "clsx";
import { useState } from "react";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const WhatToSell = () => {
  const [allSolActive, setAllSolActive] = useState(false);
  const [speceficAmountActive, setSpeceficAmountActive] = useState(false);
  const [onlyThisTradeActive, setOnlyThisTradeActive] = useState(false);

  const [amount, setAmount] = useState("");
  return (
    <div className={classes.sellWhenContainer}>
      <Text primitive400 lsm>
        What to sell
      </Text>
      <div className={classes.container}>
        <div
          className={clsx(
            classes.allSol,
            classes.box,
            allSolActive && classes.activeBox
          )}
        >
          <CircularCheckBox
            checked={allSolActive}
            setChecked={setAllSolActive}
          />

          <Text lsm blue50 medium className={classes.label}>
            <IoMdCheckmarkCircleOutline className={classes.icon} />
            All SOL
          </Text>
        </div>{" "}
        <div
          className={clsx(
            classes.speceficAmount,
            classes.box,
            speceficAmountActive && classes.activeBox
          )}
        >
          <CircularCheckBox
            checked={speceficAmountActive}
            setChecked={setSpeceficAmountActive}
          />

          <Text lsm blue50 medium className={classes.label}>
            Specific amount
          </Text>
          {speceficAmountActive && (
            <Input
              className={classes.input}
              value={amount}
              setValue={setAmount}
              placeholder="Amount"
            />
          )}
        </div>{" "}
        <div
          className={clsx(
            classes.onlyThisTrade,
            classes.box,
            onlyThisTradeActive && classes.activeBox
          )}
        >
          <CircularCheckBox
            checked={onlyThisTradeActive}
            setChecked={setOnlyThisTradeActive}
          />

          <Text lsm blue50 medium className={classes.label}>
            <IoMdCheckmarkCircleOutline className={classes.icon} />
            Only this trade (0)
          </Text>
        </div>{" "}
      </div>
    </div>
  );
};
export default WhatToSell;
