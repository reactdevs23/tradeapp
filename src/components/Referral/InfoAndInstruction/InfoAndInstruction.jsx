import { Heading, Line, Text } from "@/components/common";
import classes from "./InfoAndInstruction.module.css";
import { zarpLogo } from "@/images";

const InfoAndInstruction = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.instruction}>
        <Heading xxl primitive50>
          Turn your network into earnings.
        </Heading>
        <Text sm primitive400>
          Invite friends & get rewarded in real crypto!
        </Text>
      </div>
      <Line type2 />
      <div className={classes.rewards}>
        <div className={classes.rewardInfo}>
          <Text xs primitive400 className={classes.rewardTitle}>
            You received rewards
          </Text>{" "}
          <div>
            <Heading xxl primitive50>
              123.00 <span className={classes.currency}>zarp</span>
            </Heading>
            <Text primitive500 lxs medium>
              ≈ $870.42
            </Text>
          </div>
        </div>
        <img src={zarpLogo} alt="#" className={classes.logo} />
      </div>
      <Line type2 />
      <Text base primitive500 className={classes.info}>
        You will earn <span className={classes.highlight}>20% </span> of user
        trade fees for life
      </Text>
    </div>
  );
};
export default InfoAndInstruction;
