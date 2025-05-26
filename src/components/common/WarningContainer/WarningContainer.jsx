import clsx from "clsx";
import { Text } from "..";
import classes from "./WarningContainer.module.css";
import { RiErrorWarningFill } from "react-icons/ri";

const WarningContainer = ({ children, type2 }) => {
  return (
    <div className={clsx(classes.wrapper, type2 && classes.type2)}>
      <RiErrorWarningFill className={classes.icon} />{" "}
      <Text lxs primitive300>
        {children}
      </Text>
    </div>
  );
};
export default WarningContainer;
