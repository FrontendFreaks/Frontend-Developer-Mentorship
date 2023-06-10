import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LearnBatch from "./pages/LearnBatch";
import LearnHtml from "./pages/HTML/LearnHtml";
import LearnCss from "./pages/CSS/LearnCss";
import LearnGit from "./pages/GIT/LearnGit";
import LearnJs from "./pages/JS/LearnJs";
import LearnReact from "./pages/React/LearnReact";
import Hire from "./pages/Hire";
import Build from "./pages/Build";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<LearnBatch />} />
          <Route path="hire" element={<Hire />} />
          <Route path="build" element={<Build />} />
          <Route path="learn/html" element={<LearnHtml />} />
          <Route path="learn/css" element={<LearnCss />} />
          <Route path="learn/git" element={<LearnGit />} />
          <Route path="learn/js" element={<LearnJs />} />
          <Route path="build/react" element={<LearnReact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
