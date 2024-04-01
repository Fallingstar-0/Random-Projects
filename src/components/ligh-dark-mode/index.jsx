import React, { useEffect, useState } from "react"
import "./theme.css"

const useLocalStorage = (key, defaultValue) => {
  const handleInitialValue = () => {
    try {
      return JSON.parse(localStorage.getItem(key) || String(defaultValue))
    } catch (error) {
      console.log(error.message)
      return defaultValue
    }
  }
  const [value, setValue] = useState(handleInitialValue)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark")

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default LightDarkMode
