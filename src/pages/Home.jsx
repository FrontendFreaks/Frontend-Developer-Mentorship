import React from "react";
import Hero from "./../components/Hero";
import About from "./../components/About";
import Features from "./../components/Features";
import JoinBatches from "./../components/JoinBatches";
import Accordion from "./../components/Accordion";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <JoinBatches />
      {/* <AboutFounder /> */}
      <Accordion />
    </>
  );
};

export default Home;
