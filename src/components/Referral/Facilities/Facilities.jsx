import { Text } from "@/components/common";
import classes from "./Facilities.module.css";
import { LuCircleCheckBig } from "react-icons/lu";

const Facilities = () => {
  const features = [
    "Get Paid Instantly",
    "No Limit",
    "Track Your Earnings",
    "Safe & Secure",
  ];
  return (
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
  );
};
export default Facilities;
