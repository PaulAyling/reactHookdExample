import React, {useContext } from 'react'
import  { ThemeContext } from './ThemeContext'
 

export default function ThemeToggle() {
  const { myTheme, toggleTheme } = useContext(ThemeContext);
  console.log('myCont',myTheme)
  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  )
}
