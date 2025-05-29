import { AmountInput, Button, Modal, Text } from "@/components/common";
import classes from "./BuyPopup.module.css";
import clsx from "clsx";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const BuyPopup = ({
  onClose,
  isActive,
  name,
  logo,
  price,
  change,
  dex,
  liquidity,
  mintAuthority,
  frozenAuthority,
}) => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const handleBuyNow = () => {
    navigate("/buy-success");
  };
  return (
    <Modal
      heading="Buy"
      isActive={isActive}
      onClose={onClose}
      className={clsx(classes.modal, classes.myModal)}
    >
      <div className={classes.singleToken}>
        <div className={classes.header}>
          <div className={classes.info}>
            <img src={logo} alt={name} className={classes.logo} />
            <div>
              <Text base medium primitive200>
                {name}
              </Text>
              <Text lxs medium primitive400>
                {name} Token
              </Text>
            </div>
          </div>
          <div>
            <Text base medium primitive200 textRight>
              {price}
            </Text>
            <Text lxs medium textRight>
              {change !== null ? (
                <span
                  className={change >= 0 ? classes.positive : classes.negative}
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
      <div className={classes.amountContainer}>
        <AmountInput
          label="Amount"
          tokenName={name}
          value={amount}
          setValue={setAmount}
          placeholder="0.00"
        />
        <Text primitive400 sm textRight className={classes.balanceContainer}>
          Your balance: <span className={classes.balance}>124.0 SOL</span>
        </Text>
      </div>
      <Button green onClick={handleBuyNow}>
        Buy Now
      </Button>
    </Modal>
  );
};
export default BuyPopup;
