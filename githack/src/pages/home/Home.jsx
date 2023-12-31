import React from "react";
import HomeHero from "../../components/Home/HomeHero";
import Intro from "../../components/Home/Intro";
import Impact from "../../components/Home/Impact";
import Footer from "../../components/Home/Footer";
import ThreeSteps from "../../components/Home/ThreeSteps/ThreeSteps";
// import Steps from "../../components/Home/Steps";
import ReadyBin from "../../components/Home/ReadyBin";
import CreateAccountCTA from "../../components/Home/CreateAccountCTA/CreateAccountCTA";

function Home() {
  return (
    <>
      <HomeHero />
      <Intro />
      <Impact />
      <ThreeSteps />
      <ReadyBin />
      <CreateAccountCTA />
      <Footer />
      {/* <Steps /> */}
    </>
  );
}

export default Home;
