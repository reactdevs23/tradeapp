import AmountBox from "@/components/Trade/AmountBox/AmountBox";
import classes from "./TradePage.module.css";
import { useState } from "react";
import clsx from "clsx";
import { AiOutlineSwap } from "react-icons/ai";
import NetworkAndExchange from "@/components/Trade/NetworkAndExchange/NetworkAndExchange";
import { exchangeList, networks, tokenList } from "@/data/data";
import SelectToken from "@/components/Modals/SelectToken/SelectToken";
import CoinInfo from "@/components/Trade/CoinInfo/CoinInfo";
import { Button } from "@/components/common";
import { addToCartIcon } from "@/images";
import AdvanceSettings from "@/components/Trade/AdvanceSettings/AdvanceSettings";
const payingPercentages = ["25%", "50%", "75%", "100%"];

const TradePage = () => {
  // network and exchange
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [selectedExchange, setSelectedExchange] = useState(exchangeList[0]);

  // pay and receive
  const [activePercentage, setActivePercentage] = useState("25%");
  const [selectedPayingToken, setSelectedPayingToken] = useState(tokenList[0]);
  const [isPayingTokenModalActive, setIsPayingTokenModalActive] =
    useState(false);

  const [selectedReceivingToken, setSelectedReceivingToken] = useState(
    tokenList[1]
  );
  const [isReceivingTokenModalActive, setIsReceivingTokenModalActive] =
    useState(false);
  const [payingAmount, setPayingAmount] = useState("");
  const [receivingAmount, setReceivingAmount] = useState("");

  return (
    <>
      <div className={clsx(classes.wrapper, "space")}>
        <NetworkAndExchange
          selectedNetwork={selectedNetwork}
          setSelectedNetwork={setSelectedNetwork}
          selectedExchange={selectedExchange}
          setSelectedExchange={setSelectedExchange}
          networks={networks}
          exchangeList={exchangeList}
        />
        <div className={clsx(classes.amountContainer)}>
          {/* paying token selection */}
          <div className={classes.payingAmount}>
            <AmountBox
              payingPercentages={payingPercentages}
              activePercentage={activePercentage}
              setActivePercentage={setActivePercentage}
              className={classes.paying}
              selectedItem={selectedPayingToken?.symbol}
              logo={selectedPayingToken?.logo}
              onClick={() => setIsPayingTokenModalActive(true)}
              label="You Pay"
              amount={payingAmount}
              setAmount={setPayingAmount}
              balance={1.24}
              usdBalance={3129.72}
            />

            <button className={classes.swapWrapper}>
              <AiOutlineSwap className={classes.arrow} />
            </button>
          </div>
          {/* receiving token selection */}
          <AmountBox
            className={classes.receiving}
            selectedItem={selectedReceivingToken?.symbol}
            logo={selectedReceivingToken?.logo}
            onClick={() => setIsReceivingTokenModalActive(true)}
            label="You Receive"
            amount={receivingAmount}
            setAmount={setReceivingAmount}
            balance={12.35}
            usdBalance={870.42}
          />
        </div>
        <CoinInfo />
        <AdvanceSettings />

        <div className={classes.buttonContainer}>
          <Button blue10 wFull className={classes.tradeNowButton}>
            Trade Now
          </Button>
          <Button green10 wFull className={classes.addToCartButton}>
            {" "}
            <img
              src={addToCartIcon}
              alt="#"
              className={classes.addToCartIcon}
            />{" "}
            Add to Cart
          </Button>
        </div>
      </div>
      <SelectToken
        isActive={isPayingTokenModalActive}
        onClose={() => setIsPayingTokenModalActive(false)}
        items={tokenList}
        selectedToken={selectedPayingToken}
        setSelectedToken={setSelectedPayingToken}
      />{" "}
      <SelectToken
        isActive={isReceivingTokenModalActive}
        onClose={() => setIsReceivingTokenModalActive(false)}
        items={tokenList}
        selectedToken={selectedReceivingToken}
        setSelectedToken={setSelectedReceivingToken}
      />
    </>
  );
};
export default TradePage;
