import React, { useState } from "react";
import { GrFormCheckmark } from "react-icons/gr";
import classes from "./SelectAssets.module.css";
import { Modal, Text, Input, Heading } from "@/components/common";

import clsx from "clsx";
import { IoClose } from "react-icons/io5";

const SelectAssets = ({
  items,
  selectedAsset,
  setSelectedAsset,
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
          Select Asset
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
          className={classes.input}
        />
      </div>

      <div className={clsx(classes.items)}>
        {filteredItems.map((item, i) => (
          <div
            onClick={() => {
              setSelectedAsset(item);
              onClose();
            }}
            className={clsx(
              classes.item,
              selectedAsset?.name?.toLowerCase() ===
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
              <Text primitive200 medium base textRight>
                ${item?.valueUSD?.toLocaleString()}
              </Text>
              <Text primitive500 medium lxs textRight>
                {item?.amount} {item?.symbol}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default SelectAssets;
