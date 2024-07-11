import React from "react";
import {
  CoinIcon,
  CointIconBig,
  ExchangeLogo,
  Logo,
  ProgressBar,
  TapSection,
  Thunder,
} from "../components";

const HomePage = () => {
  return (
    <section className="bg-[#2C2F35]  pt-[3rem] pb-[10rem]">
      <div className="px-[1rem] max-w-[1300px] mx-[auto]">
        <div className="flex items-center justify-between text-[#fff] pb-[1rem]">
          <div className="flex items-center gap-1">
            <Logo />
            Emile
          </div>

          <div className="flex items-center gap-1">
            <ExchangeLogo />
            <p>Binance</p>
          </div>
        </div>

        <div className="text-[#fff] flex gap-2 justify-between pb-4">
          <div className="bg-[#30343A] rounded-lg flex flex-col items-center w-full py-[1rem]">
            <p className="text-[#FE881C] pb-1">Earn per tap</p>
            <div className="flex items-center gap-1">
              <CoinIcon />
              <p>+6</p>
            </div>
          </div>
          <div className="bg-[#30343A] rounded-lg flex flex-col items-center w-full  py-[1rem]">
            <p className="text-[#FE881C] pb-1">Earn per tap</p>
            <div className="flex items-center gap-1">
              <CoinIcon />
              <p>+6</p>
            </div>
          </div>
          <div className="bg-[#30343A] rounded-lg flex flex-col items-center w-full  py-[1rem]">
            <p className="text-[#FE881C] pb-1">Earn per tap</p>
            <div className="flex items-center gap-1">
              <CoinIcon />
              <p>+6</p>
            </div>
          </div>
        </div>

        <div className="text-[#fff] flex justify-between items-center pb-[1.5rem]">
          <p>Epic</p>

          <div className="flex items-center gap-1">
            <p>Level</p>

            <p>6/10</p>
          </div>
        </div>

        <ProgressBar />

        <div className="flex items-center gap-4 justify-center pt-[3rem]">
          <CointIconBig />
          <h1 className="text-[#fff] font-bold text-[3.5rem]">507, 981</h1>
        </div>

        <div className="flex justify-center pt-[1.5rem]">
          <TapSection />
        </div>

        <div className="text-[#fff] flex justify-between items-center pt-[3rem]">
          <div className="flex items-center gap-2">
            <Thunder />
            <p>6500/6500</p>
          </div>

          <p>Boost</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
