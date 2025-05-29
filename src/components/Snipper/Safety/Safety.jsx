import {
  Line,
  NumberInputContainer,
  ToggleContainer,
  Wrapper,
} from "@/components/common";
import classes from "./Safety.module.css";
import { memo } from "react";
import { safetyIcon } from "@/images";

const Safety = memo(({ safety, setSafety, safetyToggleOptions }) => {
  const handleSafetyChange = (field, value) =>
    setSafety((prev) => ({ ...prev, [field]: value }));

  const handleSafetyToggle = (field) =>
    setSafety((prev) => ({ ...prev, [field]: !prev[field] }));
  return (
    <Wrapper icon={safetyIcon} heading="Safety">
      <div className={classes.inputContainer}>
        <NumberInputContainer
          type2
          label="Top 10 holders max"
          value={safety.top10Holders}
          setValue={(val) => handleSafetyChange("top10Holders", val)}
          placeholder="Holders"
        />
        <NumberInputContainer
          type2
          label="Bundled max"
          value={safety.bundledMax}
          setValue={(val) => handleSafetyChange("bundledMax", val)}
          placeholder="Bundled"
        />
        <NumberInputContainer
          textCenter
          label="Max Same block buys"
          value={safety.sameBlockBuys}
          setValue={(val) => handleSafetyChange("sameBlockBuys", val)}
          placeholder="Block Buys"
        />
        <NumberInputContainer
          type2
          type3
          label="Safety check period (sec)"
          value={safety.safetyCheckPeriod}
          setValue={(val) => handleSafetyChange("safetyCheckPeriod", val)}
          placeholder="sec"
        />
      </div>
      <Line type2 />
      <div className={classes.toggleContainer}>
        {safetyToggleOptions?.map(({ label, key }) => (
          <ToggleContainer
            key={key}
            label={label}
            checked={safety[key]}
            setChecked={() => handleSafetyToggle(key)}
          />
        ))}
      </div>
    </Wrapper>
  );
});
export default Safety;
