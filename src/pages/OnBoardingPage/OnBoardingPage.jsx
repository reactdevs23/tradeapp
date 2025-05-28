import classes from "./OnBoardingPage.module.css";
import clsx from "clsx";
import { Button } from "@/components/common";
import OnBoarding from "./OnBoarding/OnBoarding";
import Facilities from "./Facilities/Facilities";
import { useNavigate } from "react-router-dom";

const OnBoardingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={clsx(classes.wrapper, "space")}>
      <div className={classes.container}>
        <OnBoarding />
        <Facilities />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          wFull
          className={classes.button}
          onClick={() => navigate("/dashboard")}
        >
          Continue with Telegram
        </Button>
      </div>
    </div>
  );
};
export default OnBoardingPage;
