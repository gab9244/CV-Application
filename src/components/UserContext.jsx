import { createContext, useState } from "react";

//Primeiro crie o context
export const UserContext = createContext();

//Crie o provedor de contexto
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState(null);
  const [savedValues, setSavedValues] = useState({
    work: [],
    education: [],
    language: [],
  })
  return (
    <UserContext.Provider value={{ inputValues, setInputValues, savedValues, setSavedValues }}>
      {children}
    </UserContext.Provider>
  );
};
