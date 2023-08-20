import React from "react";
import HomeHero from "../../components/Home/HomeHero";
import About from "../../components/About/About";
//import Mission from "../../components/About/Mission";
import Footer from "../../components/Home/Footer";
//import ReadyBin from "../../components/Home/ReadyBin";
import Map from "../../components/Home/MapComponents/Map";
import ReadyBin from "../../components/Home/ReadyBin";
import Future from "../../components/About/Future";
// import Steps from "../../components/Home/Steps";


function AboutUs() {
  return (
    <>
      <HomeHero />
      <About />
      <ReadyBin/>
      <Map/>
      <Future />
      <Footer />
      {/* <Steps /> */}
    </>
  );
}

export default AboutUs;
