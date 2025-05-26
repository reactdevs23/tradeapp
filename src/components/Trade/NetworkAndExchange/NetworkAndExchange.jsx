import { useState } from "react";
import classes from "./NetworkAndExchange.module.css";

import { SelectBox } from "@/components/common";

import SelectNetwork from "@/components/Modals/SelectNetwork/SelectNetwork";
import SelectExchange from "@/components/Modals/SelectExchange/SelectExchange";

const NetworkAndExchange = ({
  selectedNetwork,
  setSelectedNetwork,
  selectedExchange,
  setSelectedExchange,
  networks,
  exchangeList,
}) => {
  const [isSelectExchangeModalActive, setIsSelectExchangeModalActive] =
    useState(false);
  const [isSelectNetworkModalActive, setIsSelectNetworkModalActive] =
    useState(false);

  return (
    <>
      <div className={classes.selectBoxContainer}>
        <SelectBox
          className={classes.network}
          label="Network"
          selectedItem={selectedNetwork?.name || ""}
          onClick={() => setIsSelectNetworkModalActive(true)}
        />

        <SelectBox
          className={classes.assets}
          label="Exchange"
          selectedItem={selectedExchange?.name || ""}
          logo={selectedExchange?.logo}
          onClick={() => setIsSelectExchangeModalActive(true)}
        />
      </div>{" "}
      <SelectExchange
        isActive={isSelectExchangeModalActive}
        onClose={() => setIsSelectExchangeModalActive(false)}
        items={exchangeList}
        selectedExchange={selectedExchange}
        setSelectedExchange={setSelectedExchange}
      />
      <SelectNetwork
        isActive={isSelectNetworkModalActive}
        onClose={() => setIsSelectNetworkModalActive(false)}
        items={networks}
        selectedNetwork={selectedNetwork}
        setSelectedNetwork={setSelectedNetwork}
      />
    </>
  );
};
export default NetworkAndExchange;
