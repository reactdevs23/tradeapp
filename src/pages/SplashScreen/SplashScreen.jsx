import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SplashScreen.module.css"; // your styles
import { logo } from "@/images";
import useViewportHeight from "@/hooks/useViewportHeight";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  useViewportHeight();
  return (
    <div className={classes.wrapper}>
      <img src={logo} alt="Logo" className={classes.logo} />
    </div>
  );
};

export default SplashScreen;
