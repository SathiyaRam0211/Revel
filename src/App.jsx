import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route exact element={<Events />} path="/schedule" />
        <Route exact element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
