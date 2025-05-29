import { Button } from "@/components/common";
import { useState } from "react";
import classes from "./SnipperPage.module.css";
import clsx from "clsx";
import Safety from "@/components/Snipper/Safety/Safety";
import Sell from "@/components/Snipper/Sell/Sell";
import Buy from "@/components/Snipper/Buy/Buy";
import { IoMdPlayCircle } from "react-icons/io";
import { IoStopCircle } from "react-icons/io5";
import SnipperInfo from "@/components/Snipper/SnipperInfo/SnipperInfo";

const SnipperPage = () => {
  const [isRunning, setIsRunning] = useState(false);

  const [buy, setBuy] = useState({
    amount: "",
    priorityFee: "",
    slippage: "",
  });

  const [sell, setSell] = useState({
    takeProfit: "",
    stopLoss: "",
    slippage: "",
    timeout: "",
    priorityFee: "",
  });

  const [trailingStopLoss, setTrailingStopLoss] = useState(true);

  const [safety, setSafety] = useState({
    top10Holders: "",
    bundledMax: "",
    sameBlockBuys: "",
    safetyCheckPeriod: "",
    socialsAdded: false,
    liquidityBurnt: false,
    immutableMetadata: false,
    mintAuthorityRenounced: false,
    freezeAuthorityRenounced: false,
    checkPoolSize: false,
  });

  const safetyToggleOptions = [
    { label: "Socials added", key: "socialsAdded" },
    { label: "Liquidity burnt", key: "liquidityBurnt" },
    { label: "Immutable metadata", key: "immutableMetadata" },
    { label: "Mint authority renounced", key: "mintAuthorityRenounced" },
    { label: "Freeze authority renounced", key: "freezeAuthorityRenounced" },
    { label: "Check pool size", key: "checkPoolSize" },
  ];

  const handleStart = () => {
    // Add your start logic here
    setIsRunning(true);
  };

  const handleStop = () => {
    // Add your stop logic here
    setIsRunning(false);
  };

  return (
    <div className={clsx(classes.wrapper)}>
      <div className={clsx(classes.container, "space2")}>
        <Buy buy={buy} setBuy={setBuy} />
        <Sell
          sell={sell}
          setSell={setSell}
          trailingStopLoss={trailingStopLoss}
          setTrailingStopLoss={setTrailingStopLoss}
        />
        <Safety
          safetyToggleOptions={safetyToggleOptions}
          safety={safety}
          setSafety={setSafety}
        />

        {!isRunning ? (
          <Button wFull green lg onClick={handleStart}>
            <IoMdPlayCircle className={classes.icon} />
            Start Now
          </Button>
        ) : (
          <Button wFull red lg onClick={handleStop}>
            <IoStopCircle className={classes.icon} />
            Stop Now
          </Button>
        )}
      </div>
      <SnipperInfo />
    </div>
  );
};

export default SnipperPage;
