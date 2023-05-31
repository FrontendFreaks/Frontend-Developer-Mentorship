import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Features from "../components/Home/Features";
import JoinBatches from "../components/Home/JoinBatches";
import Accordion from "../components/Home/Accordion";
import AboutFounder from "../components/Home/AboutFounder";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <JoinBatches />
      <AboutFounder />
      <Accordion />
    </>
  );
};

export default Home;
