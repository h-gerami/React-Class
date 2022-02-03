import React, { createContext, useState } from "react";
import { LanguageEnum } from "../Utils/AppTypes";
interface LanguageContextType {
  language: string;
  setLanguage: (lng: LanguageEnum) => void;
}
export const LanguageContext = createContext({} as LanguageContextType);
interface LanguageContextProviderType {
  children: React.ReactNode;
}
export const LanguageContextProvider = (props: LanguageContextProviderType) => {
  const { children } = props;
  const [language, setLanguage] = useState<LanguageEnum>(LanguageEnum.en);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
