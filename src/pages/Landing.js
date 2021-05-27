import React from "react";
import herobanner from "../assets/herobanner.svg";

const Landing = () => {
  return (
    <main>
      <div className="herobanner-cont">
        <img className="herobanner" src={herobanner} alt="herobanner img" />
      </div>
    </main>
  );
};

export default Landing;
