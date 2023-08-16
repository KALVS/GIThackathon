import React from "react";
import AboutHero from "../../components/About/AboutHero";
import About from "../../components/About/About";
import Footer from "../../components/Home/Footer";
import ReadyBin from "../../components/Home/ReadyBin";
import FAQ from "../../components/About/FAQ";


function AboutUs() {
  return (
    <>
      <AboutHero />
      <About />
      <FAQ/>
      <ReadyBin />
      <Footer />
      
    </>
  );
}

export default AboutUs;
