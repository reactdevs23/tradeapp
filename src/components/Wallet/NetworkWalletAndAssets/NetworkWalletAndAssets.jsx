import { useState } from "react";
import classes from "./NetworkWalletAndAssets.module.css";

import { SelectBox } from "@/components/common";
import SelectAssets from "@/components/Modals/SelectAssets/SellectAssets";
import SelectNetwork from "@/components/Modals/SelectNetwork/SelectNetwork";
import SelectWallet from "@/components/Modals/SelectWallet/SelectWallet";

const NetworkWalletAndAssets = ({
  selectedNetwork,
  setSelectedNetwork,
  selectedWallet,
  setSelectedWallet,
  selectedAsset,
  setSelectedAsset,

  networks,
  cryptoAssets,
  wallets,
}) => {
  const [isSelectAssetModalActive, setIsSelectAssetModalActive] =
    useState(false);
  const [isSelectNetworkModalActive, setIsSelectNetworkModalActive] =
    useState(false);
  const [isSelectWalletModalActive, setIsSelectWalletModalActive] =
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
          className={classes.wallet}
          label="From Wallet"
          selectedItem={selectedWallet?.name || ""}
          onClick={() => setIsSelectWalletModalActive(true)}
        />
        <SelectBox
          className={classes.assets}
          label="Asset"
          selectedItem={selectedAsset?.symbol || ""}
          logo={selectedAsset?.logo}
          onClick={() => setIsSelectAssetModalActive(true)}
        />
      </div>{" "}
      <SelectAssets
        isActive={isSelectAssetModalActive}
        onClose={() => setIsSelectAssetModalActive(false)}
        items={cryptoAssets}
        selectedAsset={selectedAsset}
        setSelectedAsset={setSelectedAsset}
      />
      <SelectNetwork
        isActive={isSelectNetworkModalActive}
        onClose={() => setIsSelectNetworkModalActive(false)}
        items={networks}
        selectedNetwork={selectedNetwork}
        setSelectedNetwork={setSelectedNetwork}
      />{" "}
      <SelectWallet
        isActive={isSelectWalletModalActive}
        onClose={() => setIsSelectWalletModalActive(false)}
        items={wallets}
        selectedWallet={selectedWallet}
        setSelectedWallet={setSelectedWallet}
      />
    </>
  );
};
export default NetworkWalletAndAssets;
