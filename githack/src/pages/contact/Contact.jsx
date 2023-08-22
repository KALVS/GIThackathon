import React from "react";
import HomeHero from "../../components/Home/HomeHero";
import Form from "../../components/Contact/Form";
import Footer from "../../components/Home/Footer";
import Call from "../../components/Contact/Call";

function ContactUs() {
  return (
    <>
      <HomeHero />
      <Form/>
      <Call/>
      <Footer />
    </>
  );
}

export default ContactUs;