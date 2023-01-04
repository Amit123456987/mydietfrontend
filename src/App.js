import "./App.css";
import Header from "./components/Header";
import Home from "./Page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./Page/ErrorPage";
import SinglePage from "./Page/SinglePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SinglePage/:id" element={<SinglePage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
