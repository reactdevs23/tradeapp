import React, { useState } from "react";
import { GrFormCheckmark } from "react-icons/gr";
import classes from "./SelectToken.module.css";
import { Modal, Text, Input, Heading } from "@/components/common";

import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { maskToken } from "@/utils/utils";

const SelectToken = ({
  items,
  selectedToken,
  setSelectedToken,
  isActive,
  onClose,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Modal noHeader isActive={isActive} onClose={onClose}>
      <div className={classes.header}>
        <Heading primitive200 medium lg>
          Select Token
        </Heading>

        <button onClick={onClose}>
          {" "}
          <IoClose className={classes.closeIcon} />
        </button>
        <Input
          search
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Search"
          wrapperClassName={classes.inputWrapper}
          className={classes.input}
        />
      </div>

      <div className={clsx(classes.items)}>
        {filteredItems.map((item, i) => (
          <div
            onClick={() => {
              setSelectedToken(item);
              onClose();
            }}
            className={clsx(
              classes.item,
              selectedToken?.name?.toLowerCase() ===
                item?.name?.toLowerCase() && classes.active
            )}
            key={i}
          >
            <div className={classes.coinInfo}>
              <img src={item.logo} alt={item.name} className={classes.logo} />
              <div className={classes.name}>
                <Text medium primitive200>
                  {item?.symbol}
                </Text>
                <Text primitive500 lxs medium>
                  {item?.name}
                </Text>
              </div>
            </div>{" "}
            <div className={classes.value}>
              <Text primitive200 medium lxs>
                {item?.amount}
              </Text>
              <Text primitive500 medium lxs>
                {maskToken(item?.address)}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default SelectToken;
