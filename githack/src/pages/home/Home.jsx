import React from "react";
import HomeHero from "../../components/Home/HomeHero";
import Intro from "../../components/Home/Intro";
import Impact from "../../components/Home/Impact";
// import Steps from "../../components/Home/Steps";
import ReadyBin from "../../components/Home/ReadyBin";

function Home() {
  return (
    <>
      <HomeHero />
      <Intro />
      <Impact />
      {/* <Steps /> */}
      <ReadyBin />
    </>
  );
}

export default Home;
