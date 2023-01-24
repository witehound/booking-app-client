import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, List, Hotel } from "./Pages";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotel/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
