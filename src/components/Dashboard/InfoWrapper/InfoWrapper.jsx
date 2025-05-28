import { rewardImg, tradeImg, transactionImg, usersImg } from "@/images";
import InfoBox from "./InfoBox";
import classes from "./InfoWrapper.module.css";
const InfoWrapper = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.cards}>
        <InfoBox img={usersImg} label="Total Users">
          123,456
        </InfoBox>
        <InfoBox img={tradeImg} label="Total USD Traded">
          $150.6 <span className={classes.amount}>million</span>
        </InfoBox>
        <InfoBox img={rewardImg} label="Total Zarp Rewarded">
          1,234,567,890
        </InfoBox>
        <InfoBox img={transactionImg} label="Total Transactions">
          $15.6 <span className={classes.amount}>billion</span>
        </InfoBox>
      </div>
    </div>
  );
};
export default InfoWrapper;
