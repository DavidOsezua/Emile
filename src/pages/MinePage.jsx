import React from "react";
import {
  Check,
  CoinIcon,
  CointIconBig,
  MineTab,
  MysteryIcon,
} from "../components";

const MinePage = () => {
  return (
    <section className="bg-[#2C2F35]  pt-[2rem] pb-[5rem]">
      <div className="px-[1rem] max-w-[1300px] mx-[auto]">
        <div className="text-[#fff] flex gap-2 justify-between pb-4">
          <div className="bg-[#30343A] rounded-lg flex flex-col items-center w-full py-[0.5rem] px-[1rem]">
            <p className="text-[#FE881C] pb-1">Earn per tap</p>
            <div className="flex items-center gap-1">
              <CoinIcon />
              <p>+6</p>
            </div>
          </div>
          <div className="bg-[#30343A] rounded-lg flex flex-col items-center w-full  py-[0.5rem] px-[1rem]">
            <p className="text-[#FE881C] pb-1">Earn per tap</p>
            <div className="flex items-center gap-1">
              <CoinIcon />
              <p>+6</p>
            </div>
          </div>
          <div className="bg-[#30343A] rounded-lg flex flex-col items-center w-full  py-[0.5rem] px-[1rem]">
            <p className="text-[#FE881C] pb-1">Earn per tap</p>
            <div className="flex items-center gap-1">
              <CoinIcon />
              <p>+6</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center pt-[1.5rem]">
          <CointIconBig />
          <h1 className="text-[#fff] font-bold text-[3.5rem]">507, 981</h1>
        </div>
        <div className="flex justify-end text-[#fff] pt-[1rem]">
          <p>2:34:50 </p>
        </div>

        <div className="flex justify-between items-center text-[#fff] my-[1rem] bg-[#30343A] p-[0.8rem] rounded-lg">
          <p>Daily Combo</p>

          <div className="flex items-center gap-2  bg-[#282A2F] px-[0.8rem] py-[0.5rem] rounded-lg">
            <CoinIcon />
            <p>+5,000,000</p>
            <Check />
          </div>
        </div>

        <div className="text-[#fff] flex gap-2 justify-between pb-4">
          <div className="bg-[#30343A] rounded-lg flex flex-col items-center w-full  py-[0.5rem] px-[1rem]">
            <MysteryIcon />
          </div>
          <div className="bg-[#30343A] rounded-lg flex flex-col items-center w-full  py-[0.5rem] px-[1rem]">
            <MysteryIcon />
          </div>
          <div className="bg-[#30343A] rounded-lg flex flex-col items-center w-full  py-[0.5rem] px-[1rem]">
            <MysteryIcon />
          </div>
        </div>

        <MineTab />
      </div>
    </section>
  );
};

export default MinePage;
