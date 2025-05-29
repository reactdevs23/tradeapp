import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"; // import icons
import clsx from "clsx";

import classes from "./NumberInput.module.css";
import { handleKeyDown } from "@/utils/utils";
import { Text } from "..";

const NumberInput = (
  {
    value,
    setValue,
    placeholder,

    onChange,
    type,
    className,
    readonly,
    name,
    sm,
    type2,
    type3,
  },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(e);
    } else {
      setValue(newValue);
    }
  };

  const increment = () => {
    const newValue = parseFloat(value || 0) + 1;
    setValue(newValue);
  };

  const decrement = () => {
    const newValue = parseFloat(value || 0) - 1;
    setValue(newValue);
  };

  return (
    <div
      className={clsx(
        type2 && classes.type2,
        type3 && classes.type3,
        classes.inputContainer,
        isFocused && classes.focused,
        className,
        sm && classes.sm
      )}
    >
      {type2 && !type3 && (
        <Text primitive400 sm medium>
          %
        </Text>
      )}
      <input
        id="input"
        name={name}
        type="number"
        onKeyDown={type === "number" ? handleKeyDown : undefined}
        value={value}
        onChange={handleChange}
        className={classes.input}
        placeholder={placeholder}
        required
        readOnly={readonly}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {type2 && (
        <div className={classes.arrows}>
          <button
            type="button"
            onClick={increment}
            className={clsx(classes.iconButton, classes.up)}
          >
            <FiChevronUp />
          </button>
          <button
            type="button"
            onClick={decrement}
            className={clsx(classes.iconButton, classes.down)}
          >
            <FiChevronDown />
          </button>
        </div>
      )}
    </div>
  );
};

export default NumberInput;
