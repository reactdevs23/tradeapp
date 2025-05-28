import InviteAndEarn from "@/components/Dashboard/InviteAndEarn/InviteAndEarn";
import classes from "./Dashboard.module.css";
import FeaturedCoins from "@/components/Dashboard/FeaturedCoins/FeaturedCoins";
import InfoWrapper from "@/components/Dashboard/InfoWrapper/InfoWrapper";
import OurPartners from "@/components/Dashboard/OurPartners/OurPartners";
import { partners } from "@/data/data";
import SocialMedia from "@/components/Dashboard/SocialMedia/SocialMedia";
import BalanceOverview from "@/components/Dashboard/BalanceOverview/BalanceOverview";

const Dashboard = () => {
  return (
    <div className={classes.wrapper}>
      <BalanceOverview />
      <SocialMedia />
      <OurPartners items={partners} /> <InviteAndEarn />
      <div className={classes.container}>
        <FeaturedCoins />
        <InfoWrapper />
      </div>
    </div>
  );
};
export default Dashboard;
