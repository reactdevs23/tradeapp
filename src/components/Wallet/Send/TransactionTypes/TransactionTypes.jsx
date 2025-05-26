import clsx from "clsx";
import classes from "./TransactionTypes.module.css";
import { Heading, Text } from "@/components/common";
const TransactionTypes = ({
  transactionTypes,
  selectedTransactionType,
  setSelectedTransactionType,
}) => {
  return (
    <div className={classes.mainWrapper}>
      <Heading lsm regular primitive400>
        Transaction Type
      </Heading>
      <div className={classes.wrapper}>
        {transactionTypes.map((transactionType, i) => (
          <button
            key={i}
            className={clsx(
              classes.box,
              selectedTransactionType?.title === transactionType?.title &&
                classes.active
            )}
            onClick={() => setSelectedTransactionType(transactionType)}
          >
            <div className={clsx(classes.outerCircle)}>
              <div className={classes.innerCircle}></div>
            </div>
            <div className={classes.titleAndDuration}>
              <Heading base primitive200 medium>
                {transactionType?.title}
              </Heading>
              <Text lxs primitive400 medium>
                {transactionType?.duration}
              </Text>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
export default TransactionTypes;
