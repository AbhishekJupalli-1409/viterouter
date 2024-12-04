import "./App.css";
import Homepage from "./components/Homepage";
import AboutLittleLemon from "./components/AboutLittleLemon";
import Contact from "./components/Contact"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";
import Dublicatehome from "./components/Dublicatehome";

function App() {
  return (
    <div id="main"> 
      
      <Router >
	    <Navbar/>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/dummyhome" element={<Dublicatehome/>}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>

        </Routes>
        </Router>
      
    </div>
  );
};

export default App;
