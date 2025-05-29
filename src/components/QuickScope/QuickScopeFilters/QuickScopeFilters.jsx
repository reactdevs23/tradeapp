import {
  CircularCheckBox,
  NumberInputContainer,
  Text,
  ToggleContainer,
} from "@/components/common";
import classes from "./QuickScopeFilters.module.css";
import CircularProgressBar from "@/components/common/CircularProgressBar/CircularProgressbar";
import Dropdown from "@/components/common/Dropdown/Dropdown";
import { useState } from "react";

const QuickScopeFilters = ({
  progress,
  selectedDex,
  setSelectedDex,
  minLiquidity,
  setMinLiquidity,
  mintAuthorityAnounced,
  setMintAuthorityAnnounced,
  frozenAuthorityAnounced,
  setFrozenAuthorityAnnounced,
  tokens,
}) => {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Text>Filters</Text>
        <CircularProgressBar
          progress={progress}
          progressColor=" #494B4C"
          bgColor="#1C1E1F"
        />
      </div>
      <div className={classes.container}>
        <div className={classes.dropdownContainer}>
          <Text sm primitive400>
            Dex
          </Text>
          <Dropdown
            className={classes.dropdown}
            dropdownItems={tokens}
            isActive={isActiveDropdown}
            setIsActive={setIsActiveDropdown}
            selectedValue={selectedDex}
            onSelect={(val) => setSelectedDex(val)}
          />
        </div>
        <NumberInputContainer
          type2
          label="Min liquidity"
          value={minLiquidity}
          setValue={setMinLiquidity}
        />
      </div>
      <ToggleContainer
        label="Mint authority renounced"
        checked={mintAuthorityAnounced}
        setChecked={setMintAuthorityAnnounced}
      />{" "}
      <ToggleContainer
        label="Frozen authority renounced"
        checked={frozenAuthorityAnounced}
        setChecked={setFrozenAuthorityAnnounced}
      />
    </div>
  );
};
export default QuickScopeFilters;
