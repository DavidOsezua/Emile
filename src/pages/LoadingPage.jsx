import React from "react";
import { LoadingImage } from "../assets";

const LoadingPage = () => {
  return (
    <section className="bg-[#2C2F35]  pt-[8rem] pb-[10rem]">
      <img src={LoadingImage} />

      <div className="flex justify-center">
        <div className="loader"></div>
      </div>
    </section>
  );
};

export default LoadingPage;
