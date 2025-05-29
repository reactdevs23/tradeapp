import { Line } from "@/components/common";
import SingleToken from "./SingleToken";
import classes from "./Tokens.module.css";
import React from "react";

const Tokens = ({ data }) => {
  return (
    <div className={classes.wrapper}>
      {data?.map((item, i) => (
        <React.Fragment key={i}>
          <SingleToken {...item} key={i} />
          <Line type2 className={classes.line} />
        </React.Fragment>
      ))}
    </div>
  );
};
export default Tokens;
