import { Button, Header } from "@/components/common";
import classes from "./SendPage.module.css";
import clsx from "clsx";
import { useState } from "react";
import SendSummary from "@/components/Wallet/Send/SendSummary/SendSummary";
import SendForm from "@/components/Wallet/Send/SendForm/SendForm";
import { cryptoAssets, networks, transactionTypes, wallets } from "@/data/data";

const STEPS = {
  FORM: 1,
  SUMMARY: 2,
  REQUEST_SUBMITTED: 3,
  // Add more steps as needed
};

const SendPage = () => {
  const [step, setStep] = useState(STEPS.FORM);

  const [selectedAsset, setSelectedAsset] = useState(cryptoAssets[0]);
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [selectedWallet, setSelectedWallet] = useState(wallets[0]);

  const [address, setAddress] = useState("");

  const [amount, setAmount] = useState("");

  const [selectedTransactionType, setSelectedTransactionType] = useState(
    transactionTypes[1]
  );
  const handleBack = () => {
    if (step > STEPS.FORM) {
      setStep(step - 1);
    }
  };
  const handleTransaction = () => {
    if (step === STEPS.FORM) setStep(STEPS.SUMMARY);
    if (step === STEPS.SUMMARY) {
      setStep(STEPS.REQUEST_SUBMITTED);
    }
  };
  const isButtonDisabled =
    !address ||
    !amount ||
    !selectedAsset ||
    !selectedNetwork ||
    !selectedTransactionType;

  return (
    <div className={clsx(classes.wrapper, "space")}>
      <Header onBack={step > 1 ? handleBack : undefined}>Send</Header>

      {step === STEPS.FORM && (
        <SendForm
          // network info
          selectedNetwork={selectedNetwork}
          setSelectedNetwork={setSelectedNetwork}
          // wallet info
          selectedWallet={selectedWallet}
          setSelectedWallet={setSelectedWallet}
          // asset info
          selectedAsset={selectedAsset}
          setSelectedAsset={setSelectedAsset}
          address={address}
          setAddress={setAddress}
          amount={amount}
          setAmount={setAmount}
          selectedTransactionType={selectedTransactionType}
          setSelectedTransactionType={setSelectedTransactionType}
          networks={networks}
          wallets={wallets}
          cryptoAssets={cryptoAssets}
          transactionTypes={transactionTypes}
        />
      )}

      {(step === STEPS.SUMMARY || step === STEPS.REQUEST_SUBMITTED) && (
        <SendSummary
          network={selectedNetwork}
          assets={selectedAsset}
          selectedAsset={selectedAsset}
          amount={amount}
          fee={0.0005}
          recepientAddress={address}
          transactionType={selectedTransactionType}
          status="Processing"
          remainingConfirmation={15}
          step={step}
          STEPS={STEPS}
        />
      )}

      <div className={classes.buttonContainer}>
        {step !== STEPS.REQUEST_SUBMITTED && (
          <>
            <Button
              onClick={handleTransaction}
              wFull
              disabled={isButtonDisabled}
              className={classes.button}
            >
              {step === STEPS.FORM
                ? "Review Transaction"
                : step === STEPS.SUMMARY
                ? "Confirm to Send"
                : ""}
            </Button>
          </>
        )}
        {step === STEPS.REQUEST_SUBMITTED && (
          <Button
            transparent
            to="/wallet"
            wFull
            className={classes.backToWalletButton}
          >
            Back To Wallet
          </Button>
        )}
      </div>
    </div>
  );
};

export default SendPage;
