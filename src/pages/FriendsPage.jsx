import React from "react";
import { CoinIcon, Friends, RightArrow, SilverMedal } from "../components";
import FriendIcon from "../components/FriendIcon";

const FriendsPage = () => {
  return (
    <section className="bg-[#2C2F35]  pb-[10rem] pt-[10rem]">
      <div className="px-[1rem] max-w-[1300px] mx-[auto]">
        <h1 className="font-bold text-[3rem] text-[#fff] text-center">
          Invite Friends!
        </h1>
        <h1 className="text-center font-semibold text-[#fff] text-[1.3rem] pb-[1rem]">
          You and your friend will receive bonuses.
        </h1>

        {/* First Invite Friend Card */}
        <div className="flex justify-between items-center text-[#fff] bg-[#30343A] py-[12px] px-[24px] rounded-xl">
          <div className="flex gap-4 items-center">
            <FriendIcon />

            <div>
              <h1>Invite a friend</h1>
              <div className="flex items-center gap-2">
                <CoinIcon />

                <p className="text-[0.9rem]">
                  <span>+5,000 </span>for you and your friend
                </p>
              </div>
            </div>
          </div>

          <RightArrow />
        </div>

        <div className="flex justify-between items-center text-[#fff] bg-[#30343A] py-[12px] px-[24px] rounded-xl mt-[1rem]">
          <div className="flex gap-4 items-center ">
            <FriendIcon />

            <div>
              <h1>Invite a friend</h1>
              <div className="flex items-center gap-2">
                <CoinIcon />

                <p className="text-[0.9rem]">
                  <span>+5,000 </span>for you and your friend
                </p>
              </div>
            </div>
          </div>

          <RightArrow />
        </div>

        {/* Bonus for Leveling Up */}

        <h1 className="font-semibold text-[#fff] text-[2rem] pb-[1rem] mt-[3rem]">
          Bonus for Leveling Up
        </h1>

        <div className="flex justify-between items-center text-[#fff]   px-[24px] rounded-xl">
          <p>Level</p>
          <p>For Friend</p>
          <p>Premium</p>
        </div>

        <div className="flex justify-between items-center text-[#fff] bg-[#30343A] py-[18px] px-[24px] rounded-xl mt-[1rem]">
          <div className="flex items-center gap-1">
            {/* <SilverMedal /> */}
            <p>Silver</p>
          </div>

          <div className="flex items-center gap-1"> 
            <CoinIcon />
            <p>+25,000</p>
          </div>

          <div className="flex items-center gap-1">
            <CoinIcon />
            <p>+25,000</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-[#fff] bg-[#30343A] py-[18px] px-[24px] rounded-xl mt-[1rem]">
          <div className="flex items-center gap-1">
            {/* <SilverMedal /> */}
            <p>Silver</p>
          </div>

          <div className="flex items-center gap-1"> 
            <CoinIcon />
            <p>+25,000</p>
          </div>

          <div className="flex items-center gap-1">
            <CoinIcon />
            <p>+25,000</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-[#fff] bg-[#30343A] py-[18px] px-[24px] rounded-xl mt-[1rem]">
          <div className="flex items-center gap-1">
            {/* <SilverMedal /> */}
            <p>Silver</p>
          </div>

          <div className="flex items-center gap-1"> 
            <CoinIcon />
            <p>+25,000</p>
          </div>

          <div className="flex items-center gap-1">
            <CoinIcon />
            <p>+25,000</p>
          </div>
        </div>


        <div className="flex justify-between items-center text-[#fff] bg-[#30343A] py-[18px] px-[24px] rounded-xl mt-[1rem]">
          <div className="flex items-center gap-1">
            {/* <SilverMedal /> */}
            <p>Silver</p>
          </div>

          <div className="flex items-center gap-1"> 
            <CoinIcon />
            <p>+25,000</p>
          </div>

          <div className="flex items-center gap-1">
            <CoinIcon />
            <p>+25,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendsPage;
