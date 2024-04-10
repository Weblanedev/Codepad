import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Homepage from "./homepage";
import Footer from "./footer";
import About from "./about";
import Contact from "./contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
