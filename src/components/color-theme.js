import React, { createContext, useState, useCallback } from 'react'

export const colorContext = createContext({
  theme: 'light',
  toggleTheme() {},
})

export function Provider({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = useCallback(() =>
    setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))
  )

  return (
    <colorContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </colorContext.Provider>
  )
}
