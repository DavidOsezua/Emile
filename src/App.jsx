import React, { useEffect, useState } from "react";
import {
  CoinIcon,
  ExchangeLogo,
  Friends,
  Logo,
  Mine,
  Tasks,
} from "./components";
import HomePage from "./pages/HomePage";
import MinePage from "./pages/MinePage";
import FriendsPage from "./pages/FriendsPage";
import TaskPage from "./pages/TaskPage";
import "./App.css";
import LoadingPage from "./pages/LoadingPage";
// import Airdrop from "./pages/Airdrop";
import AirdropPage from "./pages/AirdropPage";

const App = () => {
  const [activeTab, setActiveTab] = useState("HomePage");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  const handleTabSwitching = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      {Loading ? (
        <LoadingPage />
      ) : (
        <>
          <div className="tabContainer">
            {/************************** EXCHANGE TAB ********************************/}
            <div
              onClick={() => {
                handleTabSwitching("HomePage");
              }}
              className={`${
                activeTab === "HomePage" ? "active" : ""
              } flex flex-col items-center justify-center btn`}
            >
              <ExchangeLogo />
              Exchange
            </div>

            {/************************** MINING TAB  ********************************/}
            <div
              onClick={() => {
                handleTabSwitching("MinePage");
              }}
              className={`${
                activeTab === "MinePage" ? "active" : ""
              } flex flex-col items-center justify-center btn`}
            >
              <Mine />
              Mine
            </div>

            {/************************** FRIENDS TAB ********************************/}
            <div
              onClick={() => {
                handleTabSwitching("friends");
              }}
              className={`${
                activeTab === "friends" ? "active" : ""
              } flex flex-col items-center justify-center btn`}
            >
              <Friends />
              Friends
            </div>

            {/************************** TASKS TAB ********************************/}
            <div
              onClick={() => {
                handleTabSwitching("tasks");
              }}
              className={`${
                activeTab === "tasks" ? "active" : ""
              } flex flex-col items-center justify-center btn`}
            >
              <Tasks />
              Tasks
            </div>

            {/************************** AIRDROP TAB ********************************/}
            <div
              onClick={() => {
                handleTabSwitching("airdrop");
              }}
              className={`${
                activeTab === "airdrop" ? "active" : ""
              } flex flex-col items-center justify-center btn`}
            >
              <CoinIcon />
              Airdrop
            </div>
          </div>

          {activeTab === "HomePage" && <HomePage />}
          {activeTab === "MinePage" && <MinePage />}
          {activeTab === "friends" && <FriendsPage />}
          {activeTab === "tasks" && <TaskPage />}
          {activeTab === "airdrop" && <AirdropPage />}
        </>
      )}
    </>
  );
};

export default App;
