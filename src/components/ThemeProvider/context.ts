import { createContext, useContext } from 'react'

export type ThemeMode = 'dark' | 'light'

export type ThemeProviderContextValue = {
  mode: ThemeMode
  toggleMode: () => void
}

const Context = createContext({} as ThemeProviderContextValue)

export const useThemeProvider = () => useContext(Context)

export const { Provider: ThemeProviderContext } = Context
