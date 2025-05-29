import { useRef } from "react";
import clsx from "clsx";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import classes from "./Dropdown.module.css";
import React from "react";
import useOnClickOutside from "@/hooks";
import { Text } from "@/components/common";
import { Link } from "react-router-dom";

const Dropdown = ({
  isActive,
  dropdownItems,
  selectedValue,
  onSelect,
  setIsActive,
  label,
  className,
}) => {
  const ref = useRef();

  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div className={clsx(classes.dropdown, className)} ref={ref}>
      <div
        className={clsx(classes.labelContainer, isActive && classes.active)}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <Text sm primitive50 medium className={clsx(classes.label)}>
          {selectedValue ? selectedValue : label}
        </Text>
        {isActive ? (
          <FaAngleUp className={clsx(classes.arrow, classes.active)} />
        ) : (
          <FaAngleDown className={classes.arrow} />
        )}
      </div>
      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <div className={clsx(classes.list, "overflow")}>
          <button
            className={classes.listItemContainer}
            onClick={() => {
              setIsActive(false);
              onSelect("All");
            }}
          >
            <Text
              className={clsx(
                classes.listItem,
                selectedValue === "All" && classes.active
              )}
              sm
            >
              All
            </Text>
          </button>

          {dropdownItems?.map((item, idx) => (
            <button
              key={idx}
              className={classes.listItemContainer}
              onClick={() => {
                setIsActive(false);
                onSelect(item.dex);
              }}
            >
              <Text
                className={clsx(
                  classes.listItem,
                  item.dex === selectedValue && classes.active
                )}
                sm
              >
                {item.dex}
              </Text>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
