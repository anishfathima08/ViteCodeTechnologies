import React from "react";
import Header from "../Components/CommonComponents/Header";
import Footer from "../Components/CommonComponents/Footer"
import AboutCareerGoals from "../Components/AboutPageComponents/AboutCareerGoals";
import AboutCountSection from "../Components/AboutPageComponents/AboutCountSection";
import AboutHero from "../Components/AboutPageComponents/AboutHero";

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutCareerGoals />
      <AboutCountSection />
      <Footer />
    </>
  );
};

export default AboutPage;