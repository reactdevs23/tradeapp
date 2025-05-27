import { useState } from "react";
import { Button, Heading, Text } from "@/components/common";
import classes from "./SecurityAnalysis.module.css";

const SecurityAnalysis = () => {
  const [expanded, setExpanded] = useState(false);

  const info = `High transaction volume and buyer activity suggest strong retail
interest and speculative momentum. The price has surged in the last 24
hours, indicating a potential pump cycle. However, liquidity is low
relative to market cap, increasing the risk of slippage and volatility.
The token exhibits classic meme coin behavior—rapid adoption, fast
turnover, and hype-driven price action. While short-term trends are
bullish, sustainability is questionable without continuous inflow and
demand. Overall, it's a high-risk, high-reward asset likely driven
by community hype or social catalysts.`;

  const previewText = info.slice(0, 160) + "...";

  return (
    <div className={classes.securityAnalysis}>
      <div className={classes.header}>
        <Heading primitive200 lsm medium>
          AI Security Analysis
        </Heading>
        <Button xs green10 onClick={() => {}}>
          Low Risk
        </Button>
      </div>

      <Text lxs primitive0 className={classes.info}>
        {expanded ? info : previewText}
      </Text>

      <Button
        primitive900
        lxs
        onClick={() => setExpanded((prev) => !prev)}
        className={classes.showMoreButton}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export default SecurityAnalysis;
