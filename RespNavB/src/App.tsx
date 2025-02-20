import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Infopage from "./pages/Infopage";
import RealNav from "./components/RealNav";


const App: React.FC = () => {
  return (
    <Router>
      <RealNav />
      {/* Your Routes or main content goes here */}
      <Routes>
         <Route path="/" element={<Homepage />} /> 
         <Route path="/about" element={ <Aboutpage /> } />
        <Route path="/contact" element={ <Contactpage/>} />
        <Route path="/info" element={ <Infopage/>} /> 
      </Routes>
    </Router>
  );
};

export default App;

