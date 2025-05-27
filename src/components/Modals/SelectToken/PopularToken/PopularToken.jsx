import { Text } from "@/components/common";
import classes from "./PopularToken.module.css";
import Marquee from "react-fast-marquee";

const PopularToken = ({ setSelectedToken, onClose, items = [] }) => {
  return (
    <div className={classes.wrapper}>
      <Marquee autoFill={true} speed={30} pauseOnHover={true}>
        <div className={classes.allToken}>
          {items?.map((token, i) => (
            <div
              className={classes.token}
              key={i}
              onClick={() => {
                setSelectedToken(token);
                onClose();
              }}
            >
              <img src={token?.logo} alt="#" className={classes.tokenLogo} />
              <Text sm primitive400 medium>
                {token.symbol}
              </Text>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
export default PopularToken;
