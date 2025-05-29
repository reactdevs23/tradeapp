import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";
import { ImSpinner } from "react-icons/im";

const Button = ({
  children,
  onClick,
  href,
  arrowButton,
  transparent,
  btnPrimary,
  primitive800,
  primitive900,
  primitiveTransparent8,
  semiBold,
  blue10,
  green10,
  green,
  red,
  wFull,
  className,
  to,
  loading,
  xs,
  lsm,
  lxs,

  base,
  lg,
  sm,
  radius,
  disabled,
  mxAuto,
  ...rest
}) => {
  return (
    <>
      {onClick ? (
        <button
          className={clsx(
            className,
            classes.button,
            semiBold && classes.semiBold,

            radius && classes.radius,
            base && classes.base,
            lg && classes.lg,
            sm && classes.sm,
            xs && classes.xs,
            lsm && classes.lsm,
            lxs && classes.lxs,
            mxAuto && classes.mxAuto,
            primitive800 && classes.primitive800,
            primitive900 && classes.primitive900,
            blue10 && classes.blue10,
            green10 && classes.green10,
            green && classes.green,
            red && classes.red,
            arrowButton && classes.arrowButton,
            btnPrimary && classes.btnPrimary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          onClick={onClick}
          disabled={!!(loading || disabled)}
          {...rest}
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </button>
      ) : href ? (
        <a
          {...rest}
          className={clsx(
            className,
            classes.button,
            semiBold && classes.semiBold,

            radius && classes.radius,
            base && classes.base,
            lg && classes.lg,
            sm && classes.sm,
            xs && classes.xs,
            lsm && classes.lsm,
            lxs && classes.lxs,
            mxAuto && classes.mxAuto,
            primitive800 && classes.primitive800,
            primitive900 && classes.primitive900,
            blue10 && classes.blue10,
            green10 && classes.green10,
            green && classes.green,
            red && classes.red,
            arrowButton && classes.arrowButton,
            btnPrimary && classes.btnPrimary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </a>
      ) : to ? (
        <Link
          {...rest}
          className={clsx(
            className,
            classes.button,
            semiBold && classes.semiBold,

            radius && classes.radius,
            base && classes.base,
            lg && classes.lg,
            sm && classes.sm,
            xs && classes.xs,
            lsm && classes.lsm,
            lxs && classes.lxs,
            mxAuto && classes.mxAuto,
            primitive800 && classes.primitive800,
            primitive900 && classes.primitive900,
            blue10 && classes.blue10,
            green10 && classes.green10,
            green && classes.green,
            red && classes.red,
            arrowButton && classes.arrowButton,
            btnPrimary && classes.btnPrimary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          to={to}
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </Link>
      ) : (
        <button
          className={clsx(
            className,
            classes.button,
            semiBold && classes.semiBold,

            radius && classes.radius,
            base && classes.base,
            lg && classes.lg,
            sm && classes.sm,
            xs && classes.xs,
            lsm && classes.lsm,
            lxs && classes.lxs,
            mxAuto && classes.mxAuto,
            primitive800 && classes.primitive800,
            primitive900 && classes.primitive900,
            blue10 && classes.blue10,
            green10 && classes.green10,
            green && classes.green,
            red && classes.red,
            arrowButton && classes.arrowButton,
            btnPrimary && classes.btnPrimary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          disabled={!!(loading || disabled)}
          {...rest}
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </button>
      )}
    </>
  );
};

export default Button;
