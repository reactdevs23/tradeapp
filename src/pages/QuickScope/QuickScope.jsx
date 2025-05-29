import { Header } from "@/components/common";
import classes from "./QuickScope.module.css";
import { useState } from "react";
import QuickScopeFilters from "@/components/QuickScope/QuickScopeFilters/QuickScopeFilters";
import clsx from "clsx";
import { bitCoinLogo, solanaLogo, usdtLogo, zarpImg } from "@/images";
import Tokens from "@/components/QuickScope/Tokens/Tokens";

const allTokens = [
  {
    name: "Zarp",
    logo: zarpImg,
    price: "$14.25",
    change: 1.46,
    dex: "Raydium",
    liquidity: "39 SOL",
    mintAuthority: true,
    frozenAuthority: true,
  },
  {
    name: "SOL",
    logo: solanaLogo,
    price: "$174.93",
    change: -6.34,
    dex: "Raydium",
    liquidity: "39 SOL",
    mintAuthority: true,
    frozenAuthority: false,
  },
  {
    name: "USDT",
    logo: usdtLogo,
    price: "$1.00",
    change: null,
    dex: "Raydium",
    liquidity: "39 SOL",
    mintAuthority: false,
    frozenAuthority: true,
  },
  {
    name: "BTC",
    logo: bitCoinLogo,
    price: "$108,359.20",
    change: 1.0,
    dex: "Raydium",
    liquidity: "39 SOL",
    mintAuthority: true,
    frozenAuthority: true,
  },
];

const QuickScope = () => {
  const [selectedDex, setSelectedDex] = useState("All");
  const [minLiquidity, setMinLiquidity] = useState("");
  const [mintAuthorityAnounced, setMintAuthorityAnnounced] = useState(false);
  const [frozenAuthorityAnounced, setFrozenAuthorityAnnounced] =
    useState(false);
  const parseLiquidity = (liq) => {
    if (!liq || typeof liq !== "string") return 0;
    const match = liq.match(/([\d.]+)/);
    return match ? parseFloat(match[1]) : 0;
  };

  // Filter tokens based on current filter settings
  const filteredTokens = allTokens.filter((token) => {
    const liquidityOk =
      minLiquidity === "" ||
      parseLiquidity(token.liquidity) >= parseFloat(minLiquidity);

    const dexOk = selectedDex === "All" || token.dex === selectedDex;

    const mintOk = !mintAuthorityAnounced || token.mintAuthority;

    const frozenOk = !frozenAuthorityAnounced || token.frozenAuthority;

    return liquidityOk && dexOk && mintOk && frozenOk;
  });

  return (
    <div className={clsx(classes.wrapper, "space2")}>
      <Header>Quick scope</Header>

      <QuickScopeFilters
        progress={20}
        selectedDex={selectedDex}
        setSelectedDex={setSelectedDex}
        minLiquidity={minLiquidity}
        setMinLiquidity={setMinLiquidity}
        mintAuthorityAnounced={mintAuthorityAnounced}
        setMintAuthorityAnnounced={setMintAuthorityAnnounced}
        frozenAuthorityAnounced={frozenAuthorityAnounced}
        setFrozenAuthorityAnnounced={setFrozenAuthorityAnnounced}
        tokens={allTokens} // pass unfiltered tokens for dropdown etc.
      />

      <Tokens data={filteredTokens} />
    </div>
  );
};

export default QuickScope;
