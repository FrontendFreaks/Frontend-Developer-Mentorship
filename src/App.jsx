import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import LearnHtml from "./pages/HTML/LearnHtml";
import HTMLAssignment from "./pages/HTML/HTMLAssignment";
import CSSAssignments from "./pages/CSS/CSSAssignments";
import GitAssignment from "./pages/GIT/GitAssignment";
import JSAssignment from "./pages/JS/JSAssignment";
import ReactAssignment from "./pages/React/ReactAssignment";
import HTMLNotes from "./pages/HTML/HTMLNotes";
import CSSNotes from "./pages/CSS/CSSNotes";
import GITNotes from "./pages/GIT/GITNotes";
import LearnCss from "./pages/CSS/LearnCss";
import LearnGit from "./pages/GIT/LearnGit";
import LearnJs from "./pages/JS/LearnJs";
import LearnReact from "./pages/React/LearnReact";
import JSNotes from "./pages/JS/JSNotes";
import Hire from "./pages/Hire";
import Build from "./pages/Build";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="hire" element={<Hire />} />
          <Route path="build" element={<Build />} />
          <Route path="learn/html" element={<LearnHtml />} />
          <Route path="learn/css" element={<LearnCss />} />
          <Route path="learn/git" element={<LearnGit />} />
          <Route path="learn/js" element={<LearnJs />} />
          <Route path="build/react" element={<LearnReact />} />
          <Route path="learn/html/assignment" element={<HTMLAssignment />} />
          <Route path="learn/css/assignment" element={<CSSAssignments />} />
          <Route path="learn/git/assignment" element={<GitAssignment />} />
          <Route path="learn/js/assignment" element={<JSAssignment />} />
          <Route path="build/react/assignment" element={<ReactAssignment />} />
          <Route path="learn/html/notes" element={<HTMLNotes />} />
          <Route path="learn/git/notes" element={<GITNotes />} />
          <Route path="learn/css/notes" element={<CSSNotes />} />
          <Route path="learn/js/notes" element={<JSNotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
