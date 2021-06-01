import React from "react";
import herobanner from "../assets/herobanner.svg";

const Landing = () => {
  return (
    <main>
      <div className="herobanner-cont">
        <img className="herobanner" src={herobanner} alt="herobanner img" />
      </div>
      <>
        <h1>Tervetuloa</h1>
        <p>
          Tanskalaisilla oli "hygge" jo aikoja sitten, mutta myös me suomalaiset
          olemme löytäneen kotoilun ja onhan meillä oma Strömsökin! Meistä on
          kuoritunut mitä taidokkaampia käsitöiden tekijöitä, varsinaisia
          artesaaneja. Tämä sivu on omistettu kaikille meille harrastelijoille,
          ja miksei myös ammattilaisille. Tarkoituksena on löytää omat kodit
          kaikille näille rakkaudella tehdyille käsitöille, koska määräänsä
          enempää ei voi sukulaisille ja ystäville antaa samoja lahjoja
          merkkipäivästä toiseen.
        </p>
      </>
    </main>
  );
};

export default Landing;
