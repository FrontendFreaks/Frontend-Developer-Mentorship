import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Features from "../components/Home/Features";
import JoinBatches from "../components/Home/JoinBatches";
import Accordion from "../components/Home/Accordion";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <JoinBatches />

      <Accordion />
    </>
  );
};

export default Home;
