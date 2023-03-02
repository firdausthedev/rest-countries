import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import { CountryProvider } from "./components/context/CountryContext";

function App() {
  return (
    <CountryProvider>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </CountryProvider>
  );
}

export default App;
