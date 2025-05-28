import { Heading, Text } from "@/components/common";
import classes from "./Facilities.module.css";
import { LuCircleCheckBig } from "react-icons/lu";

const Facilities = () => {
  const features = [
    "Syncing with the blockchain",
    "Decrypting your edge",
    "Launching your trading universe",
  ];
  return (
    <div className={classes.wrapper}>
      <Heading primitive50 xxl2 className={classes.heading}>
        Seamless Trading. Real-Time Control
      </Heading>
      <div className={classes.features}>
        {features.map((feature, i) => (
          <div className={classes.feature} key={i}>
            <LuCircleCheckBig className={classes.icon} />
            <Text base primitive400>
              {feature}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Facilities;
