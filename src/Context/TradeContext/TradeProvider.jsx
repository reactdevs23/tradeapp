import { useState } from "react";
import TradeContext from "./TradeContext"; // <- import from separate file
import { exchangeList, networks, tokenList } from "@/data/data";

const TradeProvider = ({ children }) => {
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [selectedExchange, setSelectedExchange] = useState(exchangeList[0]);
  const [selectedPayingToken, setSelectedPayingToken] = useState(tokenList[0]);
  const [selectedReceivingToken, setSelectedReceivingToken] = useState(
    tokenList[1]
  );
  const [activePercentage, setActivePercentage] = useState("25%");
  const [payingAmount, setPayingAmount] = useState("");
  const [receivingAmount, setReceivingAmount] = useState("");

  return (
    <TradeContext.Provider
      value={{
        selectedNetwork,
        setSelectedNetwork,
        selectedExchange,
        setSelectedExchange,
        selectedPayingToken,
        setSelectedPayingToken,
        selectedReceivingToken,
        setSelectedReceivingToken,
        activePercentage,
        setActivePercentage,
        payingAmount,
        setPayingAmount,
        receivingAmount,
        setReceivingAmount,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};

export default TradeProvider;
