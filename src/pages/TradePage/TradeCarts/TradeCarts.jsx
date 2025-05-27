import { Button, Header, Text, WarningContainer } from "@/components/common";
import Cart from "./Cart/Cart";
import classes from "./TradeCarts.module.css";
import clsx from "clsx";
import Switch from "@/components/common/Switch/Switch";
import { useState } from "react";
import Tabs from "./Tabs/Tabs";
import Overlay from "@/components/common/Overlay/Overlay";
import TradeSubmitted from "@/components/Trade/TradeSubmitted/TradeSubmitted";
const STEPS = {
  CARTS: 1,
  TRADE_SUBMITTED: 2,
};
const priorities = ["Fast", "Faster", "Turbo"];
const TradeCarts = () => {
  const [step, setStep] = useState(STEPS.CARTS);
  const [buildTransaction, setBuildTransaction] = useState(false);
  const [activePriority, setActivePriority] = useState("Fast");

  const handleExecuteSelected = () => {
    setStep(STEPS.TRADE_SUBMITTED);
  };
  const handleExecuteAll = () => {
    setStep(STEPS.TRADE_SUBMITTED);
  };
  return (
    <>
      <Header className={clsx(classes.header, "space")}>Cart (0)</Header>
      <div className={clsx(classes.wrapper, "space")}>
        {step === STEPS.CARTS && (
          <>
            <div className={classes.carts}>
              <Cart /> <Cart />
            </div>

            <WarningContainer>
              <span className={classes.highlight}>Disclaimer:</span> The info
              above represents the state when order was added to the cart. you
              may get slightly different outputs during execution depending on
              slippage
            </WarningContainer>

            <div className={classes.footer}>
              <div className={classes.spaceBetween}>
                <Text lsm primitive400>
                  Bundle Transactions
                </Text>
                <Switch
                  isChecked={buildTransaction}
                  setIsChecked={setBuildTransaction}
                />
              </div>{" "}
              <div className={classes.spaceBetween}>
                <Text lsm primitive400>
                  Priority Fee
                </Text>
                <Tabs
                  tabs={priorities}
                  activeTab={activePriority}
                  setActiveTab={setActivePriority}
                />
              </div>
              <div className={classes.buttonContainer}>
                <Button
                  blue10
                  wFull
                  className={classes.button}
                  onClick={handleExecuteSelected}
                >
                  Execute Selected Trade
                </Button>
                <Button
                  wFull
                  className={classes.button}
                  onClick={handleExecuteAll}
                >
                  Execute All
                </Button>
              </div>
            </div>
            <Overlay type2 />
          </>
        )}
      </div>{" "}
      {step === STEPS.TRADE_SUBMITTED && <TradeSubmitted />}
    </>
  );
};
export default TradeCarts;
