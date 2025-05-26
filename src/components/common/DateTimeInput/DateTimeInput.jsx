import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { FiCalendar } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./DateTimeInput.module.css"; // Custom CSS module
import "./DatePicker.css";
import clsx from "clsx";

const CustomInput = forwardRef(({ value, onClick, isOpen }, ref) => (
  <div className={classes.inputWrapper} onClick={onClick} ref={ref}>
    <FiCalendar className={clsx(classes.icon, isOpen && classes.activeIcon)} />
    <input
      className={classes.input}
      value={value}
      readOnly
      placeholder="dd/mm/yy --:--"
    />
    {isOpen ? (
      <FaChevronUp
        className={clsx(classes.arrow, isOpen && classes.activeIcon)}
      />
    ) : (
      <FaChevronDown className={classes.arrow} />
    )}
  </div>
));

const Calender = () => {
  const [startDate, setStartDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="dd/MM/yy HH:mm"
        customInput={<CustomInput isOpen={isOpen} />}
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        showPopperArrow={false}
      />
    </div>
  );
};

export default Calender;
