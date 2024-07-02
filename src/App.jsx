import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Events from "./pages/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route exact element={<Events />} path="/schedule" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
