import React, { useState } from "react";
import classes from "./SelectNetwork.module.css";
import { Modal, Text, Input, Heading } from "@/components/common";

import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

const SelectNetwork = ({
  items,
  selectedNetwork,
  setSelectedNetwork,
  isActive,
  onClose,
}) => {
  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      className={clsx(classes.modal, classes.myModal)}
      heading="Select Network"
    >
      <div className={clsx(classes.items)}>
        {items.map((item, i) => (
          <button
            onClick={() => {
              setSelectedNetwork(item);
              onClose();
            }}
            className={clsx(
              classes.item,
              selectedNetwork?.name?.toLowerCase() ===
                item?.name?.toLowerCase() && classes.active
            )}
            key={i}
          >
            <div className={classes.networkInfo}>
              <Text medium base primitive50 className={classes.name}>
                {item?.name} ({item?.symbol})
              </Text>

              <Text primitive400 sm>
                {item?.confirmations} block confirmation
              </Text>
              <Text primitive400 sm>
                Min. send amount &gt; {item?.minSendAmount} USDT
              </Text>
            </div>
            <div className={classes.buttonContainer}>
              {selectedNetwork?.name?.toLowerCase() ===
              item?.name?.toLowerCase() ? (
                <FaRegCircleCheck className={classes.checkMark} />
              ) : (
                <p className={classes.selectButton}>Select</p>
              )}
            </div>
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default SelectNetwork;
