import { buyIcon, sellIcon } from "@/images";
import classes from "./SnipperTransaction.module.css";
import { Line, Text } from "@/components/common";
import React from "react";

const SnipperTransaction = ({ data }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.spaceBetween}>
          <Text sm primitive500>
            Tokens sniped:
          </Text>
          <Text lsm medium primitive200 textRight>
            1
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive500>
            Total Profit:
          </Text>
          <Text lsm medium primitive200 textRight>
            0.00 SOL
          </Text>
        </div>
      </div>
      {data?.map(({ type, amount, token, platform, time, viewOn }, i) => (
        <React.Fragment key={i}>
          <div className={classes.item}>
            <img
              src={
                type.toLowerCase() === "sold"
                  ? sellIcon
                  : type.toLowerCase() === "bought"
                  ? buyIcon
                  : ""
              }
              alt="#"
              className={classes.icon}
            />
            <div>
              <Text sm primitive200 medium>
                {type} {amount} {token} of {platform}
              </Text>{" "}
              <Text sm primitive400>
                at {time}
              </Text>
            </div>
            <div className={classes.viewOnContainer}>
              <Text lxs primitive400 medium>
                View on
              </Text>
              <div className={classes.viewOn}>
                {viewOn.map(({ logo, link, name }, index) => (
                  <a
                    href={link}
                    rel="noreferrer"
                    className={classes.viewOn}
                    key={index}
                  >
                    <img src={logo} alt={name} className={classes.logo} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Line className={classes.line} />
        </React.Fragment>
      ))}
    </div>
  );
};
export default SnipperTransaction;
