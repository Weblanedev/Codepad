import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Homepage from "./homepage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
