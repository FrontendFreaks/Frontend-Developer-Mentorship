import React from "react";
import { About, AboutFounder, Accordion, JoinBatches, Features, Hero } from "../components/Home";

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
