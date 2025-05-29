import {
  NumberInputContainer,
  ToggleContainer,
  Wrapper,
} from "@/components/common";
import classes from "./sell.module.css";
import { memo } from "react";
import { sellIcon } from "@/images";

const Sell = memo(
  ({ sell, setSell, trailingStopLoss, setTrailingStopLoss }) => {
    const handleSellChange = (field, value) =>
      setSell((prev) => ({ ...prev, [field]: value }));
    return (
      <Wrapper icon={sellIcon} heading="Sell">
        <div className={classes.inputContainer}>
          <NumberInputContainer
            label="Amount"
            value={sell.amount}
            setValue={(val) => handleSellChange("amount", val)}
            placeholder="Amount"
          />
          <NumberInputContainer
            label="Priority fee"
            value={sell.priorityFee}
            setValue={(val) => handleSellChange("priorityFee", val)}
            placeholder="Priority fee"
          />
          <NumberInputContainer
            type2
            label="Slippage"
            value={sell.slippage}
            setValue={(val) => handleSellChange("slippage", val)}
            placeholder="Slippage"
          />{" "}
          <ToggleContainer
            className={classes.toggle}
            label="Trailing stop loss"
            checked={trailingStopLoss}
            setChecked={setTrailingStopLoss}
          />
        </div>
      </Wrapper>
    );
  }
);
export default Sell;
