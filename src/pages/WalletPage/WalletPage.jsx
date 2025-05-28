import clsx from "clsx";
import classes from "./WalletPage.module.css";
import WalletOverview from "@/components/Wallet/WalletOverview/WalletOverview";
import NavItems from "@/components/Wallet/NavItems/NavItems";
import Alltokens from "@/components/Wallet/AllTokens/AllTokens";

const WalletPage = () => {
  return (
    <div className={clsx("", classes.container)}>
      <WalletOverview />

      <NavItems />
      <Alltokens />
    </div>
  );
};
export default WalletPage;
