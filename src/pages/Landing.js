import React from "react";
import herobanner from "../assets/herobanner.svg";

const Landing = () => {
  return (
    <section>
      <div className="herobanner-cont">
        <img className="herobanner" src={herobanner} alt="herobanner img" />
      </div>
    </section>
  );
};

export default Landing;
