import React from "react";
import AboutHero from "../../components/About/AboutHero";
import About from "../../components/About/About";
import Mission from "../../components/About/Mission";
import Footer from "../../components/Home/Footer";
import ReadyBin from "../../components/Home/ReadyBin";
import FAQ from "../../components/About/FAQ";


// import Steps from "../../components/Home/Steps";


function AboutUs() {
  return (
    <>
      <AboutHero />
      <About />
      <Mission/>
      <FAQ/>
      <ReadyBin />
      <Footer />
      {/* <Steps /> */}
    </>
  );
}

export default AboutUs;
