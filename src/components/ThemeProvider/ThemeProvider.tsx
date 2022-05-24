import {
  ThemeProvider as MaterialProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles'
import React, { PropsWithChildren, useMemo, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {
  ThemeProviderContext,
  type ThemeProviderContextValue,
  type ThemeMode,
} from './context'

export type ThemeProviderProps = PropsWithChildren<unknown>

const lightTheme = responsiveFontSizes(
  createTheme({ palette: { mode: 'light' } })
)

const darkTheme = responsiveFontSizes(
  createTheme({ palette: { mode: 'dark' } })
)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>('light')
  const value = useMemo<ThemeProviderContextValue>(
    () => ({
      mode,
      toggleMode: () => setMode(mode === 'light' ? 'dark' : 'light'),
    }),
    [mode]
  )

  return (
    <MaterialProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <ThemeProviderContext value={value}>{children}</ThemeProviderContext>
    </MaterialProvider>
  )
}
