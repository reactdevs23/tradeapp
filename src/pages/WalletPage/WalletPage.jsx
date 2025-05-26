import clsx from "clsx";
import classes from "./WalletPage.module.css";
import WalletOverview from "@/components/Wallet/WalletOverview/WalletOverview";
import { Heading, IconButton } from "@/components/common";
import { IoNotifications } from "react-icons/io5";
import NavItems from "@/components/Wallet/NavItems/Navitems";
import Alltokens from "@/components/Wallet/AllTokens/AllTokens";
import Navbar from "@/components/Navbar/Navbar";

const WalletPage = () => {
  return (
    <div className={clsx("container", classes.container)}>
      <div className={clsx("space", classes.headerAndWalletOverview)}>
        <div className={clsx(classes.header)}>
          <Heading lg primitive0>
            Wallet
          </Heading>
          <IconButton onClick={() => {}}>
            <IoNotifications className={classes.icon} />
          </IconButton>
        </div>
        <WalletOverview />
      </div>
      <NavItems />
      <Alltokens />

      <Navbar />
    </div>
  );
};
export default WalletPage;
