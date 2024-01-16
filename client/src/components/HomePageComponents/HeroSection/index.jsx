import React from "react";
import "./index.scss";
import Button from "../../CommonComponents/Button";
const HeroSection = () => {
  return (
    <section className=" text-center md:text-start hero-section text-white flex  items-center px-20  ">
      <div className="content  max-w-[600px] space-y-6">
        <h1 className=" hero-title tracking-tight font-semibold ">Best IT Solution in your city</h1>

        <p className=" text-xl">
          Prevent data loss with encrypted storage and virtualized recovery,
          then enjoy increased productivity.
        </p>

        <button className="border-2 border-white px-8 py-3 text-lg">Find Out More</button>
      </div>
    </section>
  );
};

export default HeroSection;
