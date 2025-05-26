import React from "react";
import classes from "./CircularProgressBar.module.css";

const CircularProgressBar = ({ progress = 50, size = 14, strokeWidth = 2 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={classes.container}>
      <svg width={size} height={size} className={classes.rotate}>
        <circle
          className={classes.background}
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={classes.progress}
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
