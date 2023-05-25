import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JoinBatches from "./components/JoinBatches";
import Features from "./components/Features";
import Accordion from "./components/Accordion";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <JoinBatches />
      <Features />
      <Accordion />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
