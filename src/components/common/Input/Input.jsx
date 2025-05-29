import React, { memo, useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import clsx from "clsx";

import classes from "./Input.module.css";

const Input = ({
  value,
  setValue,
  search,
  placeholder,
  onKeyDown,
  onChange,
  type,
  className,
  readonly,
  noIcon,
  name,
  sm,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // To track if input is focused

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  // Handle change event
  const handleChange = (e) => {
    if (onChange) {
      onChange(e); // Call the passed onChange function
    } else {
      setValue(e.target.value); // Default behavior if onChange is not provided
    }
  };

  return (
    <div
      className={clsx(
        classes.inputContainer,
        isFocused && classes.focused,
        className,
        search && classes.searchIconInputContainer,
        sm && classes.sm
      )}
    >
      {search && !noIcon && <LuSearch className={classes.searchIcon} />}

      <input
        id="input"
        name={name}
        type={showPassword ? "text" : type || "text"}
        onKeyDown={onKeyDown}
        value={value}
        onChange={handleChange}
        className={classes.input}
        placeholder={placeholder}
        required
        readOnly={readonly}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {type === "password" && (
        <>
          {showPassword ? (
            <FaRegEye
              className={classes.eye}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <FaRegEyeSlash
              className={classes.eye}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </>
      )}

      {search && value && (
        <MdClose className={classes.close} onClick={() => setValue("")} />
      )}
    </div>
  );
};

export default Input;
