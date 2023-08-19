import React from "react";
import InvesHero from "../../components/investors/InvesHero";
import InvesStep from "../../components/investors/InvesStep";
import InvesMap from "../../components/investors/InvesMap";
import Offer from "../../components/investors/Offer";
import Footer from "../../components/Home/Footer";

function Investor() {
  return (
    <>
      <InvesHero />
      <InvesStep />
      <InvesMap />
      <Offer />
      <Footer />
    </>
  );
}

export default Investor;
