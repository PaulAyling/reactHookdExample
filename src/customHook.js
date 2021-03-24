import React, {useContext, useState } from 'react'

const ThemeContext = React.createContext()

function useTheme () {
  return useContext(ThemeContext)
}


function ThemeProvider ({ children }) {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
      setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
  return(
    <ThemeContext.Provider value={darkTheme}>
    <ThemeUpdateContext.Provider value = {toggleTheme}>
      {children}
    </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

export { useTheme, ThemeProvider }