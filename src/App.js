import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search/:keyword" element={<Search />}></Route>
    </Routes>
  );
}

export default App;
