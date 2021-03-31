import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [myTheme, setTheme] = useState([
    { isLightTheme: true },
    { light: { syntax: '#555', ui: '#ddd', bg: '#eee' } },
    { dark: { syntax: '#ddd', ui: '#333', bg: '#555' } },
  ]);
  // console.log('theme',theme)
  const toggleTheme = () => {
    setTheme({ isLightTheme: !myTheme.isLightTheme});
    console.log("NEW THEME",myTheme)
  };
  return (
    <ThemeContext.Provider value={{ myTheme, toggleTheme }}>{props.children}</ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
