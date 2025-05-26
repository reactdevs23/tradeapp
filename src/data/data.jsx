import {
  bitCoinLogo,
  bnbLogo,
  ethereumLogo,
  ltcLogo,
  raydiumLogo,
  solanaLogo,
  usdtLogo,
} from "@/images";

const cryptoAssets = [
  {
    logo: usdtLogo,
    symbol: "USDT",
    name: "Tether USDT",
    valueUSD: 678.24,
    amount: 678.24,
  },
  {
    logo: solanaLogo,
    symbol: "SOL",
    name: "Solana",
    valueUSD: 1441.42,
    amount: 8.24,
  },
  {
    logo: bitCoinLogo,
    symbol: "BTC",
    name: "Bitcoin",
    valueUSD: 143034.14,
    amount: 1.32,
  },
  {
    logo: ethereumLogo,
    symbol: "ETH",
    name: "Ethereum",
    valueUSD: 8486.0,
    amount: 3.32,
  },
  {
    logo: ltcLogo,
    symbol: "LTC",
    name: "Litecoin",
    valueUSD: 8486.0,
    amount: 5.32,
  },
  {
    logo: bnbLogo,
    symbol: "BNB",
    name: "Binance Coin",
    valueUSD: 2906.77,
    amount: 4.32,
  },
  {
    logo: ltcLogo,
    symbol: "LTC",
    name: "Litecoin",
    valueUSD: 8486.0,
    amount: 5.32,
  },
  {
    logo: bnbLogo,
    symbol: "BNB",
    name: "Binance Coin",
    valueUSD: 2906.77,
    amount: 4.32,
  },
];
const networks = [
  {
    name: "Ethereum",
    symbol: "ERC20",
    confirmations: 1,
    minSendAmount: 0.01,
  },
  {
    name: "Solana",
    symbol: "SOL",
    confirmations: 1,
    minSendAmount: 0.01,
  },
  {
    name: "BNB Smart Chain",
    symbol: "BEP20",
    confirmations: 1,
    minSendAmount: 0.01,
  },
  {
    name: "Tron",
    symbol: "TRC20",
    confirmations: 1,
    minSendAmount: 0.01,
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    confirmations: 1,
    minSendAmount: 0.01,
  },
];
const wallets = [
  {
    name: "Exchange Wallet",

    confirmations: 1,
  },
  {
    name: "Trading Wallet",

    confirmations: 1,
  },
  {
    name: "Spot Wallet",

    confirmations: 1,
  },
  {
    name: "Future Wallet",

    confirmations: 1,
  },
];
const exchangeList = [
  {
    logo: raydiumLogo,
    type: "DEX",
    name: "Raydium",
    valueUSD: 678.24,
    amount: 678.24,
  },
];
const tokenList = [
  {
    logo: usdtLogo,
    symbol: "USDT",
    name: "Tether USDT",
    amount: 678.24,
    address: "0x10d5ddd60a73",
  },
  {
    logo: solanaLogo,
    symbol: "SOL",
    name: "Solana",
    amount: 8.24,
    address: "0x10d5ddd60a73",
  },
  {
    logo: bitCoinLogo,
    symbol: "BTC",
    name: "Bitcoin",
    amount: 1.32,
    address: "0x10d5ddd60a73",
  },
  {
    logo: ethereumLogo,
    symbol: "ETH",
    name: "Ethereum",
    amount: 3.32,
    address: "0x10d5ddd60a73",
  },
  {
    logo: ltcLogo,
    symbol: "LTC",
    name: "Litecoin",
    amount: 5.32,
    address: "0x10d5ddd60a73",
  },
  {
    logo: bnbLogo,
    symbol: "BNB",
    name: "Binance Coin",
    amount: 4.32,
    address: "0x10d5ddd60a73",
  },
  {
    logo: ltcLogo,
    symbol: "LTC",
    name: "Litecoin",
    amount: 5.32,
    address: "0x10d5ddd60a73",
  },
  {
    logo: bnbLogo,
    symbol: "BNB",
    name: "Binance Coin",
    amount: 4.32,
    address: "0x10d5ddd60a73",
  },
];
const transactionTypes = [
  { title: "Slow", duration: "5-10 min" },
  { title: "Normal", duration: "1-3 min" },
  { title: "Fast", duration: "10-30 sec" },
];
export {
  networks,
  wallets,
  cryptoAssets,
  transactionTypes,
  exchangeList,
  tokenList,
};
