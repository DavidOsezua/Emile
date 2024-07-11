import React, { useState } from "react";
import styles from "./MineTab.module.css";
import MineCard from "./MineCard";

const MineTab = () => {
  const [activeTab, setActiveTab] = useState("HomePage");

  const handleTabSwitching = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className={`${styles.tabContainer}`}>
        {/************************** EXCHANGE TAB ********************************/}
        <div
          onClick={() => {
            handleTabSwitching("HomePage");
          }}
          className={`${activeTab === "HomePage" ? "active" : ""} ${styles.btn}
           `}
        >
          Markets
        </div>

        {/************************** MINING TAB  ********************************/}
        <button
          onClick={() => {
            handleTabSwitching("MinePage");
          }}
          className={`${activeTab === "MinePage" ? "active" : ""}  ${styles.btn}
           `}
        >
          PR & Team
        </button>

        {/************************** FRIENDS TAB ********************************/}
        <div
          onClick={() => {
            handleTabSwitching("friends");
          }}
          className={`${activeTab === "friends" ? "active" : ""} ${styles.btn}
           `}
        >
          Legal
        </div>

        {/************************** TASKS TAB ********************************/}
        <div
          onClick={() => {
            handleTabSwitching("tasks");
          }}
          className={`${activeTab === "tasks" ? "active" : ""} ${styles.btn}
           `}
        >
          Specials
        </div>
      </div>

      {activeTab === "HomePage" && (
        <div className="grid grid-cols-2 gap-4 ">
          <MineCard />
          <MineCard />
          <MineCard />
          <MineCard />
        </div>
      )}
      {activeTab === "MinePage" && ""}
      {activeTab === "friends" && ""}
      {activeTab === "tasks" && ""}
    </>
  );
};

export default MineTab;
