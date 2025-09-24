import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./components/VendingMachine";

import Chips from "./components/Chips";
import Candy from "./components/Candy";
import DrPepper from "./components/DrPepper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/drpepper" element={<DrPepper />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/candy" element={<Candy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
