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
    valueUSD: -678.24,
    amount: -678.24,
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
    logo: ethereumLogo,
    name: "Ethereum",
    symbol: "ERC20",
    confirmations: 1,
    minSendAmount: 0.01,
  },
  {
    logo: solanaLogo,
    name: "Solana",
    symbol: "SOL",
    confirmations: 1,
    minSendAmount: 0.01,
  },
  {
    logo: bnbLogo,
    name: "BNB Smart Chain",
    symbol: "BEP20",
    confirmations: 1,
    minSendAmount: 0.01,
  },
  {
    logo: bnbLogo,
    name: "Tron",
    symbol: "TRC20",
    confirmations: 1,
    minSendAmount: 0.01,
  },
  {
    logo: bnbLogo,
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
    valueUSD: -678.24,
    amount: -678.24,
  },
];
const tokenList = [
  {
    logo: usdtLogo,
    symbol: "USDT",
    name: "Tether USDT",
    amount: 678.24,
    address: "0x10d5ddd60a73",
    source: "raydium",
  },
  {
    logo: solanaLogo,
    symbol: "SOL",
    name: "Solana",
    amount: 8.24,
    address: "0x10d5ddd60a73",
    source: "pumpfun",
  },
  {
    logo: bitCoinLogo,
    symbol: "BTC",
    name: "Bitcoin",
    amount: 1.32,
    address: "0x10d5ddd60a73",
    source: "raydium",
  },
  {
    logo: ethereumLogo,
    symbol: "ETH",
    name: "Ethereum",
    amount: 3.32,
    address: "0x10d5ddd60a73",
    source: "highest",
  },
  {
    logo: ltcLogo,
    symbol: "LTC",
    name: "Litecoin",
    amount: 5.32,
    address: "0x10d5ddd60a73",
    source: "highest",
  },
  {
    logo: bnbLogo,
    symbol: "BNB",
    name: "Binance Coin",
    amount: 4.32,
    address: "0x10d5ddd60a73",
    source: "raydium",
  },
  {
    logo: ltcLogo,
    symbol: "LTC",
    name: "Litecoin",
    amount: 5.32,
    address: "0x10d5ddd60a73",
    source: "highest",
  },
  {
    logo: bnbLogo,
    symbol: "BNB",
    name: "Binance Coin",
    amount: 4.32,
    address: "0x10d5ddd60a73",
    source: "pumpfun",
  },
];
const transactionTypes = [
  { title: "Slow", duration: "5-10 min" },
  { title: "Normal", duration: "1-3 min" },
  { title: "Fast", duration: "10-30 sec" },
];
const transactionsData = [
  {
    type: "Buy",
    pair: {
      from: { symbol: "USDT", logo: usdtLogo },
      to: { symbol: "ETH", logo: ethereumLogo },
    },
    amount: {
      from: { value: 678.24, symbol: "USDT" },
      to: { value: -0.25, symbol: "ETH" },
    },
    time: "Almost 2 years ago",
    status: "Completed",
    network: { name: "Ethereum", logo: ethereumLogo },
  },
  {
    type: "Sell",
    pair: {
      from: { symbol: "ETH", logo: ethereumLogo },
      to: { symbol: "USDT", logo: usdtLogo },
    },
    amount: {
      from: { value: 0.25, symbol: "ETH" },
      to: { value: -678.24, symbol: "USDT" },
    },
    time: "Almost 2 years ago",
    status: "Completed",
    network: { name: "Solana", logo: solanaLogo },
  },
  {
    type: "Buy",
    pair: {
      from: { symbol: "LTC", logo: ltcLogo },
      to: { symbol: "BTC", logo: bitCoinLogo },
    },
    amount: {
      from: { value: 0.25, symbol: "LTC" },
      to: { value: -678.24, symbol: "BTC" },
    },
    time: "Almost 2 years ago",
    status: "Pending",
    network: { name: "Ethereum", logo: ethereumLogo },
  },
  {
    type: "Buy",
    pair: {
      from: { symbol: "USDT", logo: usdtLogo },
      to: { symbol: "SOL", logo: solanaLogo },
    },
    amount: {
      from: { value: 0.25, symbol: "USDT" },
      to: { value: -678.24, symbol: "SOL" },
    },
    time: "Almost 2 years ago",
    status: "Completed",
    network: { name: "Solana", logo: solanaLogo },
  },
  {
    type: "Sell",
    pair: {
      from: { symbol: "ETH", logo: ethereumLogo },
      to: { symbol: "LTC", logo: ltcLogo },
    },
    amount: {
      from: { value: 0.25, symbol: "ETH" },
      to: { value: -678.24, symbol: "LTC" },
    },
    time: "Almost 2 years ago",
    status: "Failed",
    network: { name: "Ethereum", logo: ethereumLogo },
  },
  {
    type: "Buy",
    pair: {
      from: { symbol: "USDT", logo: usdtLogo },
      to: { symbol: "ETH", logo: ethereumLogo },
    },
    amount: {
      from: { value: -678.24, symbol: "USDT" },
      to: { value: 0.25, symbol: "ETH" },
    },
    time: "Almost 2 years ago",
    status: "Completed",
    network: { name: "Ethereum", logo: ethereumLogo },
  },
  {
    type: "Sell",
    pair: {
      from: { symbol: "ETH", logo: ethereumLogo },
      to: { symbol: "USDT", logo: usdtLogo },
    },
    amount: {
      from: { value: 0.25, symbol: "ETH" },
      to: { value: -678.24, symbol: "USDT" },
    },
    time: "Almost 2 years ago",
    status: "Completed",
    network: { name: "Solana", logo: solanaLogo },
  },
  {
    type: "Buy",
    pair: {
      from: { symbol: "LTC", logo: ltcLogo },
      to: { symbol: "BTC", logo: bitCoinLogo },
    },
    amount: {
      from: { value: 0.25, symbol: "LTC" },
      to: { value: -678.24, symbol: "BTC" },
    },
    time: "Almost 2 years ago",
    status: "Pending",
    network: { name: "Solana", logo: solanaLogo },
  },
  {
    type: "Buy",
    pair: {
      from: { symbol: "USDT", logo: usdtLogo },
      to: { symbol: "SOL", logo: solanaLogo },
    },
    amount: {
      from: { value: 0.25, symbol: "USDT" },
      to: { value: -678.24, symbol: "SOL" },
    },
    time: "Almost 2 years ago",
    status: "Completed",
    network: { name: "Solana", logo: solanaLogo },
  },
];
const partners = [
  {
    logo: usdtLogo,
    symbol: "USDT",
    name: "Tether USDT",
  },
  {
    logo: solanaLogo,
    symbol: "SOL",
    name: "Solana",
  },
  {
    logo: bitCoinLogo,
    symbol: "BTC",
    name: "Bitcoin",
  },
  {
    logo: ethereumLogo,
    symbol: "ETH",
    name: "Ethereum",
  },
  {
    logo: ltcLogo,
    symbol: "LTC",
    name: "Litecoin",
  },
  {
    logo: bnbLogo,
    symbol: "BNB",
    name: "Binance Coin",
  },
  {
    logo: ltcLogo,
    symbol: "LTC",
    name: "Litecoin",
  },
  {
    logo: bnbLogo,
    symbol: "BNB",
    name: "Binance Coin",
  },
];

const invitedList = [
  {
    friend: "Alex B.",
    status: "Completed",
    reward: "12 zarp",
    joined: "May 15, 2025",
  },
  {
    friend: "Sara M.",
    status: "Pending Action",
    reward: "0 zarp",
    joined: "May 20, 2025",
  },
  {
    friend: "John T.",
    status: "Completed",
    reward: "12 zarp",
    joined: "May 10, 2025",
  },
  {
    friend: "Emma R.",
    status: "First Trade Pending",
    reward: "0 zarp",
    joined: "May 10, 2025",
  },
  {
    friend: "Leo D.",
    status: "Incomplete",
    reward: "0 zarp",
    joined: "May 10, 2025",
  },
  {
    friend: "Alex B.",
    status: "Completed",
    reward: "12 zarp",
    joined: "May 15, 2025",
  },
  {
    friend: "Sara M.",
    status: "Pending Action",
    reward: "0 zarp",
    joined: "May 20, 2025",
  },
  {
    friend: "John T.",
    status: "Completed",
    reward: "12 zarp",
    joined: "May 10, 2025",
  },
  {
    friend: "Emma R.",
    status: "First Trade Pending",
    reward: "0 zarp",
    joined: "May 10, 2025",
  },
  {
    friend: "Leo D.",
    status: "Incomplete",
    reward: "0 zarp",
    joined: "May 10, 2025",
  },
  {
    friend: "Alex B.",
    status: "Completed",
    reward: "12 zarp",
    joined: "May 15, 2025",
  },
  {
    friend: "Sara M.",
    status: "Pending Action",
    reward: "0 zarp",
    joined: "May 20, 2025",
  },
];

export {
  networks,
  wallets,
  cryptoAssets,
  transactionTypes,
  exchangeList,
  tokenList,
  transactionsData,
  partners,
  invitedList,
};
