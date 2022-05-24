import {
  ThemeProvider as MaterialProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles'
import React, { PropsWithChildren } from 'react'
import CssBaseline from '@mui/material/CssBaseline'

export type ThemeProviderProps = PropsWithChildren<unknown>

const theme = responsiveFontSizes(createTheme())

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <MaterialProvider theme={theme}>
    <CssBaseline />
    {children}
  </MaterialProvider>
)
