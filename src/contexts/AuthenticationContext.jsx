import { createContext, useState, useContext } from "react";

const AuthenticationContext = createContext();

export const useAuthentication = () => useContext(AuthenticationContext);

export const AuthenticationProvider = ({ children }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);

  return (
    <AuthenticationContext.Provider
      value={{
        isLoginOpen,
        openLogin,
        closeLogin,
        isRegisterOpen,
        openRegister,
        closeRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
