import { Button, Heading, Line, Text } from "@/components/common";
import classes from "./QuickScopeSubmitted.module.css";
import clsx from "clsx";
import Successfull from "@/components/common/Successfull/Successfull";
import { raydiumLogo, zarpImg } from "@/images";

const QuickScopeSubmitted = () => {
  const {
    remainingConfirmation,
    status,
    coin,
    dex,
    liqudity,

    mintAuthority,
    frozenAuthority,
  } = {
    coin: {
      logo: zarpImg,
      name: "Zarp",
    },
    dex: {
      logo: raydiumLogo,
      name: "Raydium",
    },
    liqudity: "39 SOL",

    remainingConfirmation: 15,
    status: "Preprocessing",
    mintAuthority: true,
    frozenAuthority: true,
  };

  return (
    <div className={clsx(classes.wrapper, "space")}>
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
              lsm
              medium
              primitive400
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
            <Text lsm medium primitive200 textRight>
              Coin
            </Text>{" "}
            <div className={classes.coinContainer}>
              <Text base medium primitive200 textRight>
                {coin?.name}
              </Text>
              <img src={coin?.name} alt={coin?.name} className={classes.logo} />
            </div>
          </div>{" "}
          <div className={classes.item}>
            <Text lsm medium primitive200 textRight>
              Dex
            </Text>{" "}
            <div className={classes.coinContainer}>
              <Text base medium primitive200 textRight>
                {dex?.name}
              </Text>
              <img src={dex?.name} alt={dex?.name} className={classes.logo} />
            </div>
          </div>
          <div className={classes.item}>
            <Text lsm primitive400>
              Liquidity
            </Text>
            <Text base medium primitive200 textRight>
              {liqudity}
            </Text>
          </div>{" "}
          <div className={classes.item}>
            <Text lsm primitive400>
              Mint authority renounced
            </Text>
            <Text
              base
              medium
              primitive200
              textRight
              className={
                mintAuthority ? classes.permitted : classes.notPermitted
              }
            >
              {mintAuthority ? "Yes" : "No"}
            </Text>
          </div>{" "}
          <div className={classes.item}>
            <Text lsm primitive400>
              Frozen authority renounced
            </Text>
            <Text
              base
              medium
              primitive200
              textRight
              className={
                frozenAuthority ? classes.permitted : classes.notPermitted
              }
            >
              {frozenAuthority ? "Yes" : "No"}
            </Text>
          </div>
        </div>{" "}
        <Line />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          transparent
          to="/wallet"
          wFull
          className={classes.backToWalletButton}
        >
          Back To Quick Scope
        </Button>
      </div>
    </div>
  );
};
export default QuickScopeSubmitted;
