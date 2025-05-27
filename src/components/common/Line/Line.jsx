import clsx from "clsx";
import classes from "./Line.module.css";

const Line = ({ className, type2 }) => {
  return (
    <div
      className={clsx(classes.line, className, type2 && classes.type2)}
    ></div>
  );
};
export default Line;
