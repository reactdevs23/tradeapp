import { CheckBox, Text } from "@/components/common";
import classes from "./SellBox.module.css";
import Switch from "@/components/common/Switch/Switch";

const SellBox = ({ icon, heading, checked, setChecked, bg }) => {
  return (
    <div className={classes.wrapper}>
      <img src={icon} alt={heading} className={classes.icon} />
      <Text base medium primitive200>
        {heading}
      </Text>
      <Switch isChecked={checked} setIsChecked={setChecked} bg={bg} />
    </div>
  );
};
export default SellBox;
