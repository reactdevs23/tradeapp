import { Input, Text, SelectBox, WarningContainer } from "@/components/common";
import TransactionTypes from "@/components/Wallet/Send/TransactionTypes/TransactionTypes";
import { handleKeyDown } from "@/utils/utils";
import classes from "./SendForm.module.css";
import NetworkWalletAndAssets from "../../NetworkWalletAndAssets/NetworkWalletAndAssets";

const SendForm = ({
  selectedNetwork,
  setSelectedNetwork,

  selectedWallet,
  setSelectedWallet,
  selectedAsset,
  setSelectedAsset,

  address,
  setAddress,
  amount,
  setAmount,
  transactionTypes,
  selectedTransactionType,
  setSelectedTransactionType,
  networks,
  wallets,
  cryptoAssets,
}) => {
  return (
    <>
      <WarningContainer>
        Make sure the selected network matches your recipient wallet. Sending to
        an incompatible network can result in asset loss.
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

      <div className={classes.addressAndAmount}>
        <div className={classes.addressContaner}>
          <div className={classes.labelContainer}>
            <Text lsm primitive400>
              Recipient Address
            </Text>
          </div>
          <Input
            value={address}
            setValue={setAddress}
            placeholder="e.g. 0x10d543e..."
            className={classes.addressInput}
          />
        </div>

        <div className={classes.amountContaner}>
          <div className={classes.labelContainer}>
            <Text lsm primitive400>
              Amount
            </Text>
            <Text lxs primitive500 medium>
              Avl. 145.24 SOL
            </Text>
          </div>
          <div className={classes.inputWrapper}>
            <Input
              type="number"
              onKeyDown={handleKeyDown}
              value={amount}
              setValue={setAmount}
              placeholder="0.00"
              className={classes.amountInput}
            />
            <div className={classes.buttonContainer}>
              <Text sm primitive500 medium>
                {selectedAsset?.symbol}
              </Text>
              <button className={classes.maxButton}>Max.</button>
            </div>
          </div>
        </div>
      </div>

      <TransactionTypes
        selectedTransactionType={selectedTransactionType}
        setSelectedTransactionType={setSelectedTransactionType}
        transactionTypes={transactionTypes}
      />
    </>
  );
};

export default SendForm;
