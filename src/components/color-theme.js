import React, { createContext, useState } from 'react'

export const colorContext = createContext({
  theme: 'light',
  toggleTheme() {},
})

function changeTheme(checked) {
  window.__setPreferredTheme(checked ? 'dark' : 'light')
}

export function Provider({ children }) {
  const [theme, setTheme] = useState('light')

  React.useLayoutEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [theme])

  return (
    <colorContext.Provider value={{ theme, toggleTheme: changeTheme }}>
      {children}
    </colorContext.Provider>
  )
}
