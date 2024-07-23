import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import LoginDialog from "./components/dialogs/LoginDialog";
import RegisterDialog from "./components/dialogs/RegisterDialog";

function App() {
  return (
    <AuthenticationProvider>
      <LoginDialog />
      <RegisterDialog />
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route exact element={<Events />} path="/schedule" />
        </Routes>
      </BrowserRouter>
    </AuthenticationProvider>
  );
}

export default App;
