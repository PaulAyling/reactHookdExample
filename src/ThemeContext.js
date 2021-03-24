import React, {useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

function useTheme() {
  return useContext(ThemeContext)
}

function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

function ThemeProvider ({ children }) {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    console.log('toggleTHeme run')
      setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
  return(
    <ThemeContext.Provider value={darkTheme}>
    <ThemeUpdateContext.Provider value={toggleTheme}>
      {children}
    </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

export { useTheme, ThemeProvider,useThemeUpdate }