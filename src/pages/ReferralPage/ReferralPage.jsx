import InfoAndInstruction from "@/components/Referral/InfoAndInstruction/InfoAndInstruction";
import classes from "./ReferralPage.module.css";
import clsx from "clsx";
import ReferalCode from "@/components/Referral/ReferalCode/ReferalCode";
import Facilities from "@/components/Referral/Facilities/Facilities";
import { useState } from "react";
import Overlay from "@/components/common/Overlay/Overlay";
import Tabs from "@/components/Referral/Tabs/Tabs";
import InvitedList from "@/components/Referral/InvitedList/InvitedList";
import { invitedList } from "@/data/data";
const tabs = ["Referral", "Invited"];
const ReferralPage = () => {
  const [activeTab, setActiveTab] = useState("Referral");
  return (
    <>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        invited={invitedList.length}
      />
      <div className={clsx(classes.wrapper, "space")}>
        {activeTab === "Referral" && (
          <div className={clsx(classes.container)}>
            <InfoAndInstruction />
            <ReferalCode />
            <Facilities />
          </div>
        )}
        {activeTab === "Invited" && <InvitedList data={invitedList} />}
        <Overlay className={classes.overlay} />
      </div>
    </>
  );
};
export default ReferralPage;
