import React from "react";
import IndIntro from "../../components/individualCom/IndIntro";
import IndSteps from "../../components/individualCom/IndSteps";
import Start from "../../components/individualCom/Start";
import Map from "../../components/Home/MapComponents/Map";
import Footer from "../../components/Home/Footer";
import IndHero from "../../components/individualCom/IndHero";

function Individual() {
  return (
    <>
      <IndHero />
      <IndIntro />
      <IndSteps />
      <Start />
      <Map />
      <Footer />
    </>
  );
}

export default Individual;
