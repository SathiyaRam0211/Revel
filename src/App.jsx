import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import LoginDialog from "./components/dialogs/LoginDialog";
import RegisterDialog from "./components/dialogs/RegisterDialog";
import PreferencesDialog from "./components/dialogs/PreferencesDialog";

function App() {
  return (
    <AuthenticationProvider>
      <LoginDialog />
      <RegisterDialog />
      <PreferencesDialog />
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route exact element={<Events />} path="/schedule" />
          <Route
            exact
            element={<Policy type="privacy" />}
            path="/privacy-policy"
          />
          <Route
            exact
            element={<Policy type="terms" />}
            path="/terms-and-conditions"
          />
          <Route
            exact
            element={<Policy type="cancellation" />}
            path="/cancellation-policy"
          />
          <Route exact element={<Contact />} path="/contact-us" />
        </Routes>
      </BrowserRouter>
    </AuthenticationProvider>
  );
}

export default App;
