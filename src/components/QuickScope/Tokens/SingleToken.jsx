import { Button, Modal, Text } from "@/components/common";
import classes from "./Tokens.module.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import BuyPopup from "../BuyPopup/BuyPopup";

const SingleToken = ({
  name,
  logo,
  price,
  change,
  dex,
  liquidity,
  mintAuthority,
  frozenAuthority,
}) => {
  const tokenData = {
    name,
    logo,
    price,
    change,
    dex,
    liquidity,
    mintAuthority,
    frozenAuthority,
  };
  const [isBuyPopupActive, setIsBuyPopupActive] = useState(false);
  return (
    <>
      <div className={classes.singleToken}>
        <div className={classes.leftSide}>
          <div className={classes.info}>
            <img src={logo} alt={name} className={classes.logo} />
            <div>
              <Text base medium primitive200>
                {name}
              </Text>
              <Text lxs medium primitive500>
                {price}
              </Text>
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
          </div>
          <Button
            primitive800
            className={classes.buyButton}
            onClick={() => setIsBuyPopupActive(true)}
          >
            Buy
          </Button>
        </div>
        <div className={classes.rightSide}>
          <div className={classes.spaceBetween}>
            <Text lxs primitive400 medium>
              DEX
            </Text>{" "}
            <Text sm primitive200 medium>
              {dex}
            </Text>
          </div>{" "}
          <div className={classes.spaceBetween}>
            <Text lxs primitive400 medium>
              Liquidity
            </Text>{" "}
            <Text sm primitive200 medium>
              {liquidity}
            </Text>
          </div>{" "}
          <div className={classes.spaceBetween}>
            <Text lxs primitive400 medium className={classes.label}>
              Mint authority
            </Text>{" "}
            <Text sm primitive200 medium>
              {mintAuthority ? (
                <RiCheckboxCircleFill className={classes.permitted} />
              ) : (
                <IoMdCloseCircle className={classes.notPermitted} />
              )}
            </Text>
          </div>{" "}
          <div className={classes.spaceBetween}>
            <Text lxs primitive400 medium className={classes.label}>
              Frozen authority
            </Text>{" "}
            <Text sm primitive200 medium>
              {frozenAuthority ? (
                <RiCheckboxCircleFill className={classes.permitted} />
              ) : (
                <IoMdCloseCircle className={classes.notPermitted} />
              )}
            </Text>
          </div>
        </div>
      </div>
      <BuyPopup
        {...tokenData}
        isActive={isBuyPopupActive}
        onClose={() => setIsBuyPopupActive(false)}
      />
    </>
  );
};
export default SingleToken;
