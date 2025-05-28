import { IoClose } from "react-icons/io5";
import { Heading } from "..";
import classes from "./Modal.module.css";
import clsx from "clsx";
import useViewportHeight from "@/hooks/useViewportHeight";

const Modal = ({
  isActive,
  onClose,
  className,

  heading,
  children,
  parentRef,
  noHeader,
  ...rest
}) => {
  useViewportHeight();
  return (
    <>
      {isActive && (
        <div
          className={clsx(isActive && classes.active, classes.modalOverlay)}
          onClick={onClose}
        />
      )}
      <div
        ref={parentRef}
        className={clsx(
          className,
          isActive && classes.active,

          classes.modal,
          "overflow"
        )}
        {...rest}
      >
        {" "}
        {!noHeader && (
          <div className={classes.header}>
            <Heading primitive200 medium lg>
              {heading}
            </Heading>

            <button onClick={onClose}>
              {" "}
              <IoClose className={classes.closeIcon} />
            </button>
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default Modal;
