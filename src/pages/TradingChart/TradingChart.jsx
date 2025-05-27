import classes from "./TradingChart.module.css";
import { FaCaretDown } from "react-icons/fa";
import { Heading, Text } from "@/components/common";
import { bitCoinLogo, clockIcon } from "@/images";
import { MdStar } from "react-icons/md";
import clsx from "clsx";
import Chart from "@/components/Trade/Chart/Chart";

const TradingChart = () => {
  const { pair, change, logo, balance, usdBalance, rank } = {
    logo: bitCoinLogo,
    pair: "BTC / USDT",
    change: 0.99,
    balance: 42879.02,
    usdBalance: 42879.02,
    rank: 1,
  };
  const hourChange = 99;
  return (
    <div className={clsx(classes.wrapper)}>
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.header, "space")}>
          <div className={classes.coinInfo}>
            <img src={logo} alt="#" className={classes.logo} />
            <div className={classes.pairAndChange}>
              <Heading medium base primitive200 className={classes.pair}>
                {pair}
                <FaCaretDown className={classes.arrow} />
              </Heading>
              <Text xs medium>
                {change !== null ? (
                  <span
                    className={
                      change >= 0 ? classes.positive : classes.negative
                    }
                  >
                    {change > 0 ? "+" : ""}
                    {change.toFixed(2)}%
                  </span>
                ) : (
                  "-"
                )}
              </Text>
            </div>
          </div>{" "}
          <div className={classes.balanceContainer}>
            <Heading xxl medium textRight primitive300>
              {balance?.toLocaleString()}
            </Heading>
            <Text xs primitive500 medium textRight>
              ${usdBalance.toLocaleString()}
            </Text>
            <Text className={classes.rank}>
              <MdStar /> Rank {rank} Crypto
            </Text>
          </div>
        </div>

        <div className={clsx(classes.infoContainer, "space")}>
          <div className={clsx(classes.infoBox, classes.change)}>
            <img src={clockIcon} alt="#" className={classes.clockIcon} />

            <div className={classes.info}>
              <Text primitive500 xs>
                24h Change
              </Text>
              <Text sm medium>
                {hourChange !== null ? (
                  <span
                    className={
                      hourChange >= 0 ? classes.positive : classes.negative
                    }
                  >
                    {hourChange > 0 ? "+" : ""}
                    {hourChange.toFixed(2)}%
                  </span>
                ) : (
                  "-"
                )}
              </Text>
            </div>
          </div>
          <div className={classes.infoBox}>
            <Text primitive500 xs>
              24h Volume
            </Text>
            <Text primitive300 sm medium>
              307.7
            </Text>
          </div>{" "}
          <div className={classes.infoBox}>
            <Text primitive500 xs>
              24h Volume
            </Text>
            <Text primitive300 sm medium>
              561,774.59
            </Text>
          </div>{" "}
          <div className={classes.infoBox}>
            <Text primitive500 xs>
              24h Low
            </Text>
            <Text primitive300 sm medium>
              298.0
            </Text>
          </div>{" "}
          <div className={classes.infoBox}>
            <Text primitive500 xs>
              Market Cap.
            </Text>
            <Text primitive300 sm medium>
              171.02M
            </Text>
          </div>
        </div>
      </div>
      <Chart />
    </div>
  );
};
export default TradingChart;
