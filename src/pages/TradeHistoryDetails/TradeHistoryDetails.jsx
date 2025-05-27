import { Button, Header, Heading, Line, Text } from "@/components/common";
import classes from "./TradeHistoryDetails.module.css";
import clsx from "clsx";

import { ethereumLogo, solanaLogo, usdtLogo } from "@/images";
import { FaArrowRightLong } from "react-icons/fa6";

const TradeHistoryDetails = () => {
  const {
    type,
    pair,
    amount,
    date,
    time,
    status,
    network,
    transactionType,
    fee,
  } = {
    type: "Buy",
    pair: {
      from: { symbol: "USDT", logo: usdtLogo },
      to: { symbol: "ETH", logo: ethereumLogo },
    },
    amount: {
      from: { value: 678.24, symbol: "USDT" },
      to: { value: -0.25, symbol: "ETH" },
    },
    time: "Almost 2 years ago",
    status: "Completed",
    network: { name: "Ethereum", logo: ethereumLogo },
    date: "14 Apr 2023",
    transactionType: { title: "Fast", duration: "1-3 min" },
    fee: "0.000099458  ETH",
  };

  return (
    <div className={clsx(classes.wrapper, "space")}>
      <Header>Trade</Header>
      <div className={clsx(classes.wrapper)}>
        <Heading base primitive200 medium>
          Summary
        </Heading>
        <div className={classes.container}>
          <div className={classes.items}>
            <div className={classes.item}>
              <Text lsm primitive400>
                Type
              </Text>
              <Text base medium primitive200 textRight>
                {type || "-"}
              </Text>
            </div>
            <div className={classes.item}>
              <Text lsm primitive400>
                Pair
              </Text>
              <div className={classes.pair}>
                <div className={classes.coin}>
                  <img
                    src={pair.from.logo}
                    alt={pair.from.symbol}
                    className={classes.logo}
                  />
                  <span className={classes.symbol}>{pair.from.symbol}</span>
                </div>
                <FaArrowRightLong className={classes.arrow} />
                <div className={classes.coin}>
                  <img
                    src={pair.to.logo}
                    alt={pair.to.symbol}
                    className={classes.logo}
                  />
                  <span className={classes.symbol}>{pair.to.symbol}</span>
                </div>
              </div>
            </div>
            <div className={classes.item}>
              <Text lsm primitive400>
                Network
              </Text>
              <div className={classes.networkContainer}>
                <Text base medium primitive200 textRight>
                  {network.name}
                </Text>
                <img src={network.logo} alt="#" className={classes.logo} />
              </div>
            </div>
          </div>
          <Line />

          <div className={classes.items}>
            <div className={classes.item}>
              <Text lsm primitive400>
                Amount paid
              </Text>
              <Text sm medium className={classes.amount} textRight>
                <span
                  className={
                    amount?.from?.value >= 0
                      ? classes.positive
                      : classes.negative
                  }
                >
                  {amount?.from?.value > 0 ? "+" : ""}
                  {amount?.from?.value?.toFixed(2)} {amount.from.symbol}
                </span>{" "}
              </Text>
            </div>{" "}
            <div className={classes.item}>
              <Text lsm primitive400>
                Amount received
              </Text>
              <Text sm medium className={classes.amount} textRight>
                <span
                  className={
                    amount?.to?.value >= 0 ? classes.positive : classes.negative
                  }
                >
                  {amount?.to?.value > 0 ? "+" : ""}
                  {amount?.to?.value?.toFixed(2)} {amount.to.symbol}
                </span>
              </Text>
            </div>
          </div>
          <Line />
          <div className={classes.items}>
            <div className={clsx(classes.item, classes.date)}>
              <Text lsm primitive400>
                Date
              </Text>
              <div>
                <Text base medium primitive200 textRight>
                  {date || "-"}
                </Text>
                <Text sm primitive500>
                  {time || "-"}
                </Text>
              </div>
            </div>{" "}
            <div className={classes.item}>
              <Text lsm primitive400>
                Status
              </Text>
              <Text
                base
                medium
                primitive200
                textRight
                className={clsx(classes.status, {
                  [classes.completed]: status.toLowerCase() === "completed",
                  [classes.pending]: status.toLowerCase() === "pending",
                  [classes.failed]: status.toLowerCase() === "failed",
                })}
              >
                {status || "-"}
              </Text>
            </div>{" "}
          </div>

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
      </div>
      <div className={classes.buttonContainer}>
        <Button
          transparent
          to="/trade-history"
          wFull
          className={classes.backButton}
        >
          Back To Trade History
        </Button>
      </div>
    </div>
  );
};
export default TradeHistoryDetails;
