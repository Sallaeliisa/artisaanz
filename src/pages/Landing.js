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
          elävää kulttuuriperintöä. Suomi on pullollaan upeita käsityöläisiä.
          Tämä sivu on omistettu kaikille meille oman elämämme taiteilijoille.{" "}
        </p>
        <p>
          Tältä sivustolta löydät mitä upeimpia ja uniikkeja käsitöitä, sekä
          voit laittaa omia tuotoksiasi myyntiin.{" "}
        </p>
      </div>
    </main>
  );
};

export default Landing;
