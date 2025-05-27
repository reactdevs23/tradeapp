import classes from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import MainLayout from "@/Layout/MainLayout";

import WalletPage from "./pages/WalletPage/WalletPage";
import { Heading } from "./components/common";
import NotFound from "./components/common/NotFound/NotFound";
import SendPage from "./pages/WalletPage/SendPage/SendPage";
import ReceivePage from "./pages/WalletPage/ReceivePage/ReceivePage";
import TradePage from "./pages/TradePage/TradePage";
import TradeLayout from "./Layout/TradeLayout/TradeLayout";

import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
import TradeHistoryDetails from "./pages/TradeHistoryDetails/TradeHistoryDetails";
import TradingChart from "./pages/TradingChart/TradingChart";
import TradeCarts from "./pages/TradeCarts/TradeCarts";

function App() {
  const isAuthenticated = true;
  return (
    <>
      <Heading xl5 className={classes.heading} primitive0>
        Please open in mobile
      </Heading>
      <main className={classes.mainWrapper}>
        <Routes>
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<MainLayout />}>
              {/* Wallet start */}
              <Route path="/wallet" element={<WalletPage />} />
              <Route path="/send" element={<SendPage />} />
              <Route path="/receive" element={<ReceivePage />} />

              {/* wallet end */}

              {/* Trade start */}
              <Route path="/" element={<TradeLayout />}>
                <Route path="trade" element={<TradePage />} />
                <Route path="chart" element={<TradingChart />} />
                <Route path="/trade-history" element={<TradeHis />} />
              </Route>
              <Route
                path="/trade-history-details"
                element={<TradeHistoryDetails />}
              />
              <Route path="/trade-cart" element={<TradeCarts />} />
              {/* Trade end */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
