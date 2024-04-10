import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Homepage from "./homepage";
import Footer from "./footer";
import About from "./about";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
