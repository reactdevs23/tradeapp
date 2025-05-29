import { NumberInputContainer, Wrapper } from "@/components/common";
import classes from "./Buy.module.css";
import { memo } from "react";
import { buyIcon } from "@/images";

const Buy = memo(({ buy, setBuy }) => {
  const handleBuyChange = (field, value) =>
    setBuy((prev) => ({ ...prev, [field]: value }));
  return (
    <Wrapper icon={buyIcon} heading="Buy">
      <div className={classes.inputContainer}>
        <NumberInputContainer
          label="Amount"
          value={buy.amount}
          setValue={(val) => handleBuyChange("amount", val)}
          placeholder="Amount"
        />
        <NumberInputContainer
          label="Priority fee"
          value={buy.priorityFee}
          setValue={(val) => handleBuyChange("priorityFee", val)}
          placeholder="Priority fee"
        />
        <NumberInputContainer
          type2
          label="Slippage"
          value={buy.slippage}
          setValue={(val) => handleBuyChange("slippage", val)}
          placeholder="Slippage"
        />
      </div>
    </Wrapper>
  );
});
export default Buy;
