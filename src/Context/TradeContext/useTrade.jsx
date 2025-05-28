import { useContext } from "react";
import TradeContext from "./TradeContext";

const useTrade = () => {
  const context = useContext(TradeContext);
  if (!context) {
    throw new Error("useTrade must be used within a <TradeProvider>");
  }
  return context;
};

export default useTrade;
