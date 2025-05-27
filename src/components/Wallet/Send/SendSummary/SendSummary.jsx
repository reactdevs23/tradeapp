import { Button, Heading, Line, Text } from "@/components/common";
import classes from "./SendSummary.module.css";
import clsx from "clsx";
import Successfull from "@/components/common/Successfull/Successfull";

const SendSummary = ({
  network,
  assets,
  wallet,
  amount,
  recepientAddress,
  transactionType,
  fee,
  STEPS,
  step,
  status,
  remainingConfirmation,
}) => {
  return (
    <>
      <div className={clsx(classes.wrapper)}>
        {" "}
        {step === STEPS.REQUEST_SUBMITTED && (
          <Successfull
            heading="Request Submitted!"
            info="Your request is being processed. You’ll receive a confirmation once the transaction is complete."
          />
        )}
        <Heading base primitive200 medium>
          Summary
        </Heading>
        <div className={classes.container}>
          {step === STEPS.REQUEST_SUBMITTED && (
            <>
              <div className={classes.items}>
                <div className={classes.item}>
                  <Text lsm primitive400>
                    Status
                  </Text>
                  <Text
                    base
                    medium
                    primitive200
                    textRight
                    className={clsx(classes.status, classes.processing)}
                  >
                    {status || "-"}
                  </Text>
                </div>{" "}
                <div className={classes.item}>
                  <Text lsm primitive400>
                    Remain Confirmation
                  </Text>
                  <Text xs primitive400 textRight>
                    <span className={classes.highlight}>
                      {remainingConfirmation}
                    </span>{" "}
                    /20
                  </Text>
                </div>{" "}
              </div>
              <Line />
            </>
          )}
          <div className={classes.items}>
            <div className={classes.item}>
              <Text lsm primitive400>
                Network
              </Text>
              <Text base medium primitive200 textRight>
                {network?.name}
              </Text>
            </div>
            <div className={classes.item}>
              <Text lsm primitive400>
                From Wallet
              </Text>
              <Text base medium primitive200 textRight>
                {wallet}
              </Text>
            </div>
            <div className={classes.item}>
              <Text lsm primitive400>
                Asset
              </Text>
              <div className={classes.assets}>
                <img src={assets?.logo} alt="#" className={classes.logo} />
                <Text base medium primitive200 textRight>
                  {assets?.symbol}
                </Text>
              </div>
            </div>{" "}
            <div className={classes.item}>
              <Text lsm primitive400>
                Amount
              </Text>
              <Text base medium primitive200 textRight>
                {amount} {(amount && assets?.symbol) || "-"}
              </Text>
            </div>
          </div>
          <Line />
          <div className={classes.addressContainer}>
            <Text lsm primitive400>
              Recipient Address
            </Text>{" "}
            <Text base medium primitive200 className={classes.address}>
              {recepientAddress || "-"}
            </Text>
          </div>

          {step !== STEPS.REQUEST_SUBMITTED && (
            <>
              <Line />
              <div className={classes.items}>
                {" "}
                <div className={classes.item}>
                  <Text lsm primitive400>
                    Transaction Type
                  </Text>
                  <Text base medium primitive200 textRight>
                    {transactionType?.title || "-"}{" "}
                    <span className={classes.duration}>
                      {transactionType?.duration
                        ? `(${transactionType.duration})`
                        : ""}
                    </span>
                  </Text>
                </div>{" "}
                <div className={classes.item}>
                  <Text lsm primitive400>
                    Fee
                  </Text>
                  <Text base medium primitive200 textRight>
                    {fee} {(fee && assets?.symbol) || "-"}
                  </Text>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={classes.buttonContainer}>
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
    </>
  );
};
export default SendSummary;
