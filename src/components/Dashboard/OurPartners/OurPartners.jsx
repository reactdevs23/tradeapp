import { Text } from "@/components/common";
import classes from "./OurPartners.module.css";
import Marquee from "react-fast-marquee";

const OurPartners = ({ items = [] }) => {
  return (
    <div className={classes.wrapper}>
      <Text sm medium primitive0>
        Our Partners
      </Text>
      <Marquee autoFill={true} speed={30} pauseOnHover={true}>
        <div className={classes.partners}>
          {items?.map((partner, i) => (
            <div className={classes.logoContainer} key={i}>
              <img src={partner?.logo} alt="#" className={classes.logo} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
export default OurPartners;
