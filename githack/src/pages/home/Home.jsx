import React from "react";
import HomeHero from "../../components/Home/HomeHero";
import Intro from "../../components/Home/Intro";
import Impact from "../../components/Home/Impact";
import Footer from "../../components/Home/Footer";
import ThreeSteps from "../../components/Home/ThreeSteps/ThreeSteps";

function Home() {
  return (
    <>
      <HomeHero />
      <Intro />
      <Impact />
      <ThreeSteps />
      <Footer />
    </>
  );
}

export default Home;
