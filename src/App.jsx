import "./normalize.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Navbar from "./Navbar.jsx";
function App() {
    return (
        <>
            <BrowserRouter>
            <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} /> 
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
