import { Button, Heading, Line, Text } from "@/components/common";
import classes from "./InviteAndEarn.module.css";
import { friendsImg } from "@/images";
const InviteAndEarn = () => {
  return (
    <section className="space">
      <div className={classes.wrapper}>
        <div className={classes.infoAndImg}>
          <div className={classes.infoContainer}>
            <Heading xxl primitive50>
              Invite & Earn
            </Heading>
            <Text base primitive400>
              Get rewards when your friends join.
            </Text>
          </div>
          <img src={friendsImg} alt="#" className={classes.friends} />
        </div>

        <Line className={classes.line} />
        <Button
          transparent
          wFull
          className={classes.referButton}
          onClick={() => {}}
        >
          Refer Friends
        </Button>
      </div>
    </section>
  );
};
export default InviteAndEarn;
