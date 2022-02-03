import React, { createContext, useState } from "react";
interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}
export const ThemeContext = createContext({} as ThemeContextType);
interface ThemeContextProviderType {
  children: React.ReactNode;
}
export const ThemeContextProvider = (props: ThemeContextProviderType) => {
  const { children } = props;
  const [theme, setTheme] = useState<string>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
