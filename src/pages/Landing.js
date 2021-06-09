import React from "react";
import herobanner from "../assets/herobanner.svg";

const Landing = () => {
  return (
    <main>
      <div className="herobanner-cont">
        <img className="herobanner" src={herobanner} alt="herobanner img" />
      </div>
      <div className="welcometxt">
        <p>
          Käsityö on yksi Suomen suosituimmista harrastuksista ja vahvasti
          elävää kulttuuriperintöä. Käsitöitä harrastavat kaikenikäiset, niin
          naiset kuin miehetkin. Tämä sivu on omistettu kaikille meille oman
          elämämme taiteleijoille.{" "}
        </p>
        <p>
          Tältä sivustolta löydät mitä upeimpia ja uniikkeja käsitöitä, sekä
          voit laittaa omia tuotoksiasia myyntiin.{" "}
        </p>
      </div>
    </main>
  );
};

export default Landing;
