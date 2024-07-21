import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import { LoginProvider } from "./contexts/LoginContext";
import LoginDialog from "./components/dialogs/LoginDialog";

function App() {
  return (
    <LoginProvider>
      <LoginDialog />
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route exact element={<Events />} path="/schedule" />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
