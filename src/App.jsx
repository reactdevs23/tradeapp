import classes from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import MainLayout from "@/Layout/MainLayout";
import Home from "@/pages/Home/Home";
import WalletLayout from "./Layout/TradeLayout/TradeLayout";
import WalletPage from "./pages/WalletPage/WalletPage";
import { Heading } from "./components/common";
import NotFound from "./components/common/NotFound/NotFound";
import SendPage from "./pages/WalletPage/SendPage/SendPage";
import ReceivePage from "./pages/WalletPage/ReceivePage/ReceivePage";
import TradePage from "./pages/TradePage/TradePage";
import TradeLayout from "./Layout/TradeLayout/TradeLayout";
import TradeCarts from "./pages/TradePage/TradeCarts/TradeCarts";
import TradingChart from "./pages/TradePage/TradingChart/TradingChart";

function App() {
  return (
    <>
      <Heading xl5 className={classes.heading} primitive0>
        Please open in mobile
      </Heading>
      <main className={classes.mainWrapper}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Wallet start */}
            <Route path="/" element={<WalletPage />} />
            <Route path="/send" element={<SendPage />} />
            <Route path="/receive" element={<ReceivePage />} />
            <Route path="/" element={<WalletLayout />}></Route>
            {/* wallet end */}

            {/* Trade star */}
            <Route path="/" element={<TradeLayout />}>
              <Route path="trade" element={<TradingChart />} />
            </Route>
            <Route path="/trade-cart" element={<TradeCarts />} />
            {/* Trade end */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
