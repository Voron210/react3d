import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
// import SidePage from "./pages/SidePage/SidePage";
// import Cube from "./pages/Cube/Cube";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route path="/" element={<Cube />} /> */}
        {/* <Route path="/side/:id" element={<SidePage />} /> */}
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
