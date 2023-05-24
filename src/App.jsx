import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JoinBatches from "./components/JoinBatches";
import Features from "./components/Features";
import Accordion from "./components/Accordion";
import "./App.css";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <JoinBatches />
      <Features />
      <Accordion />
    </div>
  );
}

export default App;
