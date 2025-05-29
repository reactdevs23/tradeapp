import { CheckBox, Heading, Line, Text } from "@/components/common";
import classes from "./Cart.module.css";
import clsx from "clsx";
import CircularProgressBar from "@/components/common/CircularProgressBar/CircularProgressbar";
import { useState } from "react";
import useTrade from "@/Context/TradeContext/useTrade";

const Cart = () => {
  const {
    selectedNetwork,
    selectedExchange,
    selectedPayingToken,
    selectedReceivingToken,
    activePercentage,
    payingAmount,
    receivingAmount,
  } = useTrade();
  const change = -6.34;
  const [checked, setChecked] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <div className={clsx(classes.item, classes.header)}>
          <div>
            <Text lsm primitive200 medium>
              Trade: ETH to SOL
            </Text>
            <Text lxs primitive500 medium>
              1 ETH ≈ 14.42 SOL
            </Text>
          </div>
          <CircularProgressBar
            progress={20}
            progressColor=" #494B4C"
            bgColor="#1C1E1F"
          />
        </div>
        <div className={classes.item}>
          <Text sm primitive500>
            Network
          </Text>
          <div className={classes.networkContainer}>
            <Text sm medium primitive200 textRight>
              {selectedNetwork?.name}
            </Text>
            <img src={selectedNetwork?.logo} alt="#" className={classes.logo} />
          </div>
        </div>
        <div className={classes.item}>
          <Text sm primitive500>
            Exchange
          </Text>
          <div className={classes.exchange}>
            <img
              src={selectedExchange?.logo}
              alt="#"
              className={classes.logo}
            />
            <Text sm medium primitive200 textRight>
              {selectedExchange?.name}
            </Text>
          </div>
        </div>
        <div className={classes.item}>
          <Text sm primitive500>
            You pay
          </Text>
          <Text sm medium primitive200 textRight>
            {payingAmount}{" "}
            {(payingAmount && selectedPayingToken?.symbol) || "-"}
          </Text>
        </div>
        <div className={classes.item}>
          <Text sm primitive500>
            You will receive
          </Text>
          <Text sm medium primitive200 textRight>
            {receivingAmount}{" "}
            {(receivingAmount && selectedReceivingToken?.symbol) || "-"}
          </Text>
        </div>{" "}
        <div className={classes.item}>
          <Text sm primitive500>
            Price Impact
          </Text>
          <Text sm medium primitive200 textRight>
            {change !== null ? (
              <span
                className={change >= 0 ? classes.positive : classes.negative}
                style={{ marginLeft: 8 }}
              >
                {change > 0 ? "+" : ""}
                {change.toFixed(2)}%
              </span>
            ) : (
              "-"
            )}
          </Text>
        </div>{" "}
        <div className={classes.item}>
          <Text sm primitive500>
            Est. Fees
          </Text>
          <Text sm medium primitive200 textRight>
            0.000099458 ETH
          </Text>
        </div>
      </div>{" "}
      <Line type2 />
      <div className={classes.footer}>
        <CheckBox checked={checked} setChecked={setChecked} />

        <div className={classes.buttonContainer}>
          <button className={classes.editButton}>Edit</button>
          <button className={classes.deleteButton}>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
