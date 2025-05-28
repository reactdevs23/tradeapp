import { referIcon } from "@/images";
import classes from "./ReferalCode.module.css";
import { Heading, Text } from "@/components/common";
import clsx from "clsx";
import { copyToClipboard } from "@/utils/utils";
import QRCode from "react-qr-code";
import { useState } from "react";
const ReferalCode = () => {
  const link = "https://yourapp.com/ref/imcryp1478";
  const code = "IMCRYP1478";
  const [showQrCode, setShowQrCode] = useState(false);
  return (
    <div className={classes.wrapper}>
      <Text sm primitive400>
        Your referral code:
      </Text>
      <div className={classes.codeAndLink}>
        <Heading xxl medium>
          {code}
        </Heading>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={classes.linkContainer}
        >
          <Text className={classes.link}>{link}</Text>
        </a>

        {showQrCode && (
          <div className={classes.qrContainer}>
            <QRCode value={code} size={140} />
          </div>
        )}
        <button
          className={clsx(
            classes.showQrCodeButton,
            showQrCode && classes.center
          )}
          onClick={() => setShowQrCode((prev) => !prev)}
        >
          {showQrCode ? " Hide QR code" : "Show QR code"}
        </button>
      </div>
      <div className={classes.buttonContainer}>
        <button
          className={clsx(classes.button)}
          onClick={() => copyToClipboard(code)}
        >
          Copy Code
        </button>{" "}
        <button
          className={clsx(classes.button)}
          onClick={() => copyToClipboard(link)}
        >
          Copy Link
        </button>{" "}
        <button
          className={clsx(classes.button, classes.shareButton)}
          onClick={() => {}}
        >
          Share
        </button>
      </div>
      <img src={referIcon} alt="#" className={classes.referIcon} />
    </div>
  );
};
export default ReferalCode;
