import React from "react";
import HomeHero from "../../components/Home/HomeHero";
import Intro from "../../components/Home/Intro";
import Impact from "../../components/Home/Impact";
import Footer from "../../components/Home/Footer";
import ThreeSteps from "../../components/Home/ThreeSteps/ThreeSteps";
import Steps from "../../components/Home/Steps";
import ReadyBin from "../../components/Home/ReadyBin";
import Map from "../../components/Home/MapComponents/Map";

function Home() {
  return (
    <>
      <HomeHero />

      <Intro />
      <Impact />
      <ThreeSteps />

      <ReadyBin />
      <Map />

      <Footer />
    </>
  );
}

export default Home;
