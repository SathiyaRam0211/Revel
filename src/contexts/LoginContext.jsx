import { createContext, useState, useContext } from "react";

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);

  return (
    <LoginContext.Provider
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
    </LoginContext.Provider>
  );
};
