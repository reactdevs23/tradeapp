import classes from "./App.module.css";
import { Route, Routes } from "react-router-dom";

import MainLayout from "@/Layout/MainLayout";
import WalletPage from "./pages/WalletPage/WalletPage";
import SendPage from "./pages/WalletPage/SendPage/SendPage";
import ReceivePage from "./pages/WalletPage/ReceivePage/ReceivePage";
import TradePage from "./pages/TradePage/TradePage";
import TradingChart from "./pages/TradingChart/TradingChart";
import TradeCarts from "./pages/TradeCarts/TradeCarts";
import TradeHistory from "./pages/TradeHistory/TradeHistory";
import TradeHistoryDetails from "./pages/TradeHistoryDetails/TradeHistoryDetails";
import Dashboard from "./pages/Dashboard/Dashboard";
import ReferralPage from "./pages/ReferralPage/ReferralPage";
import DashboardLayout from "./Layout/DashboardLayout/DashboardLayout";
import TradeLayout from "./Layout/TradeLayout/TradeLayout";
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
import NotFound from "./components/common/NotFound/NotFound";
import { Heading } from "./components/common";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import OnBoardingPage from "./pages/OnBoardingPage/OnBoardingPage";

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
            {/* Main layout */}

            <Route path="/" element={<MainLayout noPadding />}>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/onBoarding" element={<OnBoardingPage />} />
              {/* Dashboard */}
              <Route element={<DashboardLayout heading="Dashboard" />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="referral" element={<ReferralPage />} />
            </Route>

            <Route path="/" element={<MainLayout />}>
              {/* Wallet */}
              <Route element={<DashboardLayout heading="Wallet" />}>
                <Route path="wallet" element={<WalletPage />} />
              </Route>

              <Route path="send" element={<SendPage />} />
              <Route path="receive" element={<ReceivePage />} />

              {/* Trade */}
              <Route element={<TradeLayout />}>
                <Route path="trade" element={<TradePage />} />
                <Route path="chart" element={<TradingChart />} />
                <Route path="trade-history" element={<TradeHistory />} />
              </Route>
              <Route
                path="trade-history-details"
                element={<TradeHistoryDetails />}
              />
              <Route path="trade-cart" element={<TradeCarts />} />
            </Route>
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
