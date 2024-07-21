import { createContext, useState, useContext } from "react";

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  return (
    <LoginContext.Provider value={{ isLoginOpen, openLogin, closeLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
