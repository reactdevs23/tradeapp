import React, { useState } from "react";
import classes from "./SelectWallet.module.css";
import { Modal, Text, Input, Heading } from "@/components/common";

import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

const SelectWallet = ({
  items,
  selectedWallet,
  setSelectedWallet,
  isActive,
  onClose,
}) => {
  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      className={clsx(classes.modal, classes.myModal)}
    >
      <div className={clsx(classes.items)}>
        {items.map((item, i) => (
          <button
            onClick={() => {
              setSelectedWallet(item);
              onClose();
            }}
            className={clsx(
              classes.item,
              selectedWallet?.name?.toLowerCase() ===
                item?.name?.toLowerCase() && classes.active
            )}
            key={i}
          >
            <div className={classes.networkInfo}>
              <Text medium base primitive50 className={classes.name}>
                {item?.name}
              </Text>

              <Text primitive400 sm>
                {item?.confirmations} block confirmation
              </Text>
            </div>
            <div className={classes.buttonContainer}>
              {setSelectedWallet?.name?.toLowerCase() ===
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

export default SelectWallet;
