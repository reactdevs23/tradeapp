import { Button, Header, Text, WarningContainer } from "@/components/common";
import classes from "./ReceivePage.module.css";
import clsx from "clsx";
import { useState } from "react";

import { cryptoAssets, networks, transactionTypes, wallets } from "@/data/data";
import NetworkWalletAndAssets from "@/components/Wallet/NetworkWalletAndAssets/NetworkWalletAndAssets";
import QRCode from "react-qr-code";
import CopyButton from "@/components/common/CopyButton/CopyButton";
import { copyToClipboard } from "@/utils/utils";
const WALLET_ADDRESS =
  "BeXa59Rd9f3wiTcoLrj3meAsPI3I3USEEOjpMZr4rdsWSxtVyh7bwQxDG1lCMzDb";
const ReceivePage = () => {
  const [selectedAsset, setSelectedAsset] = useState(cryptoAssets[0]);
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [selectedWallet, setSelectedWallet] = useState(wallets[0]);

  return (
    <div className={clsx(classes.wrapper, "space")}>
      <Header>Receive</Header>
      <WarningContainer>
        Please note: Only the networks supported by [platform] are displayed.
        Depositing assets via an unsupported network may loss of your funds.
      </WarningContainer>

      <NetworkWalletAndAssets
        selectedNetwork={selectedNetwork}
        setSelectedNetwork={setSelectedNetwork}
        selectedWallet={selectedWallet}
        setSelectedWallet={setSelectedWallet}
        selectedAsset={selectedAsset}
        setSelectedAsset={setSelectedAsset}
        networks={networks}
        wallets={wallets}
        cryptoAssets={cryptoAssets}
      />
      <div className={classes.addressContainer}>
        <div className={classes.qrContainer}>
          <QRCode value={WALLET_ADDRESS} size={140} />
        </div>
        <div className={classes.waletAddressWrapper}>
          <Text lsm primitive400>
            Wallet Address
          </Text>
          <div className={classes.addressCopy}>
            <Text base primitive50 medium className={classes.address}>
              {WALLET_ADDRESS}
            </Text>
            <CopyButton textToCopy={WALLET_ADDRESS} />
          </div>
        </div>
      </div>
      <div className={classes.infoContainer}>
        <div>
          <Text sm primitive400>
            Min. deposit &gt; 0.01 USDT
          </Text>
          <Text sm primitive400>
            1 block confirmation
          </Text>
        </div>
        <ul className={classes.listContainer}>
          <li className={classes.list}>
            Do not transact with Sanctioned Entities
          </li>{" "}
          <li className={classes.list}>Don’t send NFTs to this address.</li>{" "}
          <li className={classes.list}>
            Double-check your address before sending.
          </li>
        </ul>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          primitive800
          wFull
          className={classes.button}
          onClick={() => copyToClipboard(WALLET_ADDRESS)}
        >
          Copy Address
        </Button>
        <Button wFull className={classes.button}>
          Share Address
        </Button>
      </div>
    </div>
  );
};

export default ReceivePage;
