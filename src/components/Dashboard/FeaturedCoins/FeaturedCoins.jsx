import { Heading, Text } from "@/components/common";
import classes from "./FeaturedCoins.module.css";
import { bitCoinLogo, solanaLogo } from "@/images";
import clsx from "clsx";

const coins = [
  {
    logo: solanaLogo,
    symbol: "SOL",
    name: "Solana",
    amount: "$678.24",
    change: -6.34,
  },
  {
    logo: bitCoinLogo,
    symbol: "BTC",
    name: "Bitcoin",
    amount: "$108,359.20",
    change: 1.0,
  },
];
const FeaturedCoins = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Heading base bold primitive0>
          Featured coins
        </Heading>
        <button className={classes.button}>See Markets</button>
      </div>

      <div className={classes.coins}>
        {coins?.map(({ logo, symbol, name, amount, change }, i) => (
          <div key={i} className={classes.card}>
            <div className={classes.coinInfo}>
              <div>
                <Text lsm medium primitive200>
                  {symbol}
                </Text>{" "}
                <Text xs primitive500>
                  {name}
                </Text>
              </div>
              <img src={logo} alt="#" className={classes.logo} />
            </div>
            <div className={classes.balanceContainer}>
              <Text sm primitive200 medium>
                {amount}
              </Text>
              <Text xs medium>
                <span
                  className={clsx(classes.change, {
                    [classes.positive]: change >= 0,
                    [classes.negative]: change < 0,
                  })}
                >
                  {change > 0 ? "+" : ""}
                  {change?.toFixed(2)}%
                </span>{" "}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedCoins;
