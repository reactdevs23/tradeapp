import { Button, Heading, Line, Text } from "@/components/common";
import classes from "./CoinInfo.module.css";
import { ethereumLogo, securityIcon, solanaLogo } from "@/images";
import clsx from "clsx";
import SecurityAnalysis from "../SecurityAnalysis/SecurityAnalysis";
import CircularProgressBar from "@/components/common/CircularProgressBar/CircularProgressbar";
import { useState } from "react";

const CoinInfo = ({ change = -6.34 }) => {
  const [showSecrityAnalysis, setShowSecurityAnalysis] = useState(false);
  return (
    <div className={classes.wrapper}>
      <div className={classes.coinInfo}>
        <div className={classes.header}>
          <Heading primitive200 lsm medium>
            1 ETH ≈ 14.42 SOL
          </Heading>
          <CircularProgressBar progress={20} />
        </div>
        <div className={classes.spaceBetween}>
          <Text sm primitive500>
            Min. Received
          </Text>{" "}
          <Text sm primitive300 medium>
            0.273408 SOL
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive500>
            Price Impact
          </Text>{" "}
          <Text sm medium>
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
        <div className={classes.spaceBetween}>
          <Text sm primitive500>
            Order Routing
          </Text>{" "}
          <div className={classes.routing}>
            <Text
              xs
              primitive400
              medium
              className={clsx(classes.coin, classes.firstCoin)}
            >
              <img src={ethereumLogo} alt="#" className={classes.logo} />
              2%
            </Text>{" "}
            <Text
              xs
              primitive400
              medium
              className={clsx(classes.coin, classes.secondCoin)}
            >
              <img src={ethereumLogo} alt="#" className={classes.logo} />
              2%
            </Text>
            <img src={solanaLogo} alt="#" className={classes.logo} />
          </div>
        </div>
        <div className={classes.spaceBetween}>
          <Text sm primitive500>
            Est. Fees
          </Text>{" "}
          <Text sm primitive300 medium>
            0.000099458 ETH
          </Text>
        </div>
      </div>
      <Line className={classes.line} />
      {showSecrityAnalysis ? (
        <SecurityAnalysis />
      ) : (
        <Button
          transparent
          wFull
          className={classes.securityButton}
          onClick={() => setShowSecurityAnalysis(true)}
        >
          <img src={securityIcon} alt="#" className={classes.securityIcon} />{" "}
          Run AI Security Analysis
        </Button>
      )}
    </div>
  );
};
export default CoinInfo;
