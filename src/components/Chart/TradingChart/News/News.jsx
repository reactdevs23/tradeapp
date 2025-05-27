import React, { useEffect, useRef } from "react";
import classes from "./News.module.css";
import clsx from "clsx";
const News = () => {
  const widgetRef = useRef(null);
  const scriptAddedRef = useRef(false); // To track if the script is already added

  useEffect(() => {
    if (widgetRef.current && !scriptAddedRef.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        feedMode: "all_symbols",
        isTransparent: true,
        displayMode: "regular",
        width: "100%",
        height: "100%",
        colorTheme: "light",
        locale: "en",
      });

      widgetRef.current.appendChild(script);
      scriptAddedRef.current = true; // Mark the script as added
    }
  }, []);

  return (
    <div className={clsx(classes.wrapper, "container")}>
      <div ref={widgetRef} className={classes.container}></div>
      <div className="">
        <a
          className={clsx(
            "tradingview-widget-copyright",
            classes.blueTextContainer
          )}
          href="https://www.tradingview.com/"
          rel="noopener nofollow noreferrer"
          target="_blank"
        >
          <span className={clsx(classes.copyRight, "blue-text")}>
            Track all markets on TradingView
          </span>
        </a>
      </div>
    </div>
  );
};

export default News;
