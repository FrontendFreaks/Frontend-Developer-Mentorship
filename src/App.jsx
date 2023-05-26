import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import LearnHtml from "./pages/HTML/LearnHtml";
import HTMLAssignment from "./pages/HTML/HTMLAssignment";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="learn/html" element={<LearnHtml />} />
          <Route path="learn/html/assignment" element={<HTMLAssignment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
