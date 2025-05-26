import { Input, Text } from "@/components/common";
import classes from "./AmountBox.module.css";
import { handleKeyDown } from "@/utils/utils";
import { FaAngleDown } from "react-icons/fa";
import clsx from "clsx";
import CoinInfo from "../CoinInfo/CoinInfo";
const AmountBox = ({
  label,
  amount,
  setAmount,
  logo,
  selectedItem,
  balance,
  usdBalance,
  payingPercentages = [],
  activePercentage,
  setActivePercentage,
  className,
  onClick,
}) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <div className={classes.container}>
        <Text lsm primitive400>
          {label}
        </Text>
        <div className={classes.inputWrapper}>
          <Input
            value={amount}
            setValue={setAmount}
            placeholder="0.00"
            onKeyDown={handleKeyDown}
            type="number"
            className={classes.input}
          />
          <div className={classes.selectedItem} onClick={onClick}>
            {logo && <img src={logo} alt="#" className={classes.logo} />}
            <Text primitive200 base medium>
              {selectedItem}
            </Text>
            <FaAngleDown className={classes.icon} />
          </div>
        </div>
        <div className={classes.balanceContainer}>
          <Text lxs primitive500 medium>
            Balance: {balance?.toLocaleString()}
          </Text>{" "}
          <Text lxs primitive500 medium>
            ≈ ${usdBalance?.toLocaleString()}
          </Text>
        </div>
        {payingPercentages.length > 0 && (
          <div className={classes.percentages}>
            {payingPercentages?.map((percentage, i) => (
              <button
                className={clsx(classes.percentage, {
                  [classes.activePercentage]: percentage === activePercentage,
                })}
                key={i}
                onClick={() => setActivePercentage(percentage)}
              >
                {percentage}
              </button>
            ))}
          </div>
        )}
      </div>
      <CoinInfo />
    </div>
  );
};
export default AmountBox;
