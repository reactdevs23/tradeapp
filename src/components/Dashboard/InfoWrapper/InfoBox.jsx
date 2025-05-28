import { Heading, Text } from "@/components/common";
import classes from "./InfoWrapper.module.css";

const InfoBox = ({ img, label, children }) => {
  return (
    <div className={classes.infoBox}>
      <img src={img} alt="#" className={classes.img} />
      <div>
        <Heading primitive200 medium lg>
          {children}
        </Heading>
        <Text primitive500 xs>
          {label}
        </Text>
      </div>
    </div>
  );
};
export default InfoBox;
