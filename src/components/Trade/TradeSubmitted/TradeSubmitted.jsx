import { Button, Heading, Line, Text } from "@/components/common";
import classes from "./TradeSubmitted.module.css";
import clsx from "clsx";
import Successfull from "@/components/common/Successfull/Successfull";
import { useTrade } from "@/Context/TradeContext";

const TradeSubmitted = () => {
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
  const transactionType = { title: "Fast", duration: "1-3 min" };
  const fee = "0.000099458  ETH";
  const remainingConfirmation = 15;
  const status = "Preprocessing";
  const trade = "1 ETH  ≈  14.42 SOL";
  const rate = "1 ETH  ≈  14.42 SOL";
  const selectedWallet = { name: "Trading Wallet" };
  return (
    <div className={clsx(classes.wrapper)}>
      <Successfull
        heading="Trade Submitted!"
        info="Your trade is being processed. You’ll receive a confirmation."
      />

      <Heading base primitive200 medium>
        Summary
      </Heading>
      <div className={classes.container}>
        <div className={classes.items}>
          <div className={classes.item}>
            <Text lsm primitive400>
              Status
            </Text>
            <Text
              sm
              medium
              primitive200
              textRight
              className={clsx(classes.status, classes.processing)}
            >
              {status || "-"}
            </Text>
          </div>{" "}
          <div className={classes.item}>
            <Text lsm primitive400>
              Remain Confirmation
            </Text>
            <Text xs primitive400 textRight>
              <span className={classes.highlight}>{remainingConfirmation}</span>{" "}
              /20
            </Text>
          </div>{" "}
        </div>
        <Line />
        <div className={classes.items}>
          <div className={classes.item}>
            <Text lsm primitive400>
              Trade
            </Text>
            <Text lsm medium primitive200 textRight>
              {trade}
            </Text>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400>
              Rate
            </Text>
            <Text lsm medium primitive200 textRight>
              {rate}
            </Text>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400>
              Network
            </Text>
            <Text lsm medium primitive200 textRight>
              {selectedNetwork?.name}
            </Text>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400>
              Exchange
            </Text>
            <div className={classes.exchange}>
              <img
                src={selectedExchange?.logo}
                alt="#"
                className={classes.logo}
              />
              <Text lsm medium primitive200 textRight>
                {selectedExchange?.name}
              </Text>
            </div>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400>
              From Wallet
            </Text>
            <Text lsm medium primitive200 textRight>
              {selectedWallet?.name}
            </Text>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400>
              You pay
            </Text>
            <Text lsm medium primitive200 textRight>
              {payingAmount}{" "}
              {(payingAmount && selectedPayingToken?.symbol) || "-"}
            </Text>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400>
              Receive amount
            </Text>
            <Text lsm medium primitive200 textRight>
              {receivingAmount}{" "}
              {(receivingAmount && selectedReceivingToken?.symbol) || "-"}
            </Text>
          </div>{" "}
        </div>{" "}
        <Line />
        <div className={classes.items}>
          {" "}
          <div className={classes.item}>
            <Text lsm primitive400>
              Transaction Type
            </Text>
            <Text base medium primitive200 textRight>
              {transactionType?.title || "-"}{" "}
              <span className={classes.duration}>
                {transactionType?.duration
                  ? `(${transactionType.duration})`
                  : ""}
              </span>
            </Text>
          </div>{" "}
          <div className={classes.item}>
            <Text lsm primitive400>
              Fee
            </Text>
            <Text base medium primitive200 textRight>
              {fee}
            </Text>
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          transparent
          to="/wallet"
          wFull
          className={classes.backToWalletButton}
        >
          Back To Wallet
        </Button>
      </div>
    </div>
  );
};
export default TradeSubmitted;
