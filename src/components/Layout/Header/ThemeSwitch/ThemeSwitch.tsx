import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useThemeProvider } from '../../../ThemeProvider'
import { IconButton } from '../../../IconButton'

export const ThemeSwitch = () => {
  const { mode, toggleMode } = useThemeProvider()

  return (
    <IconButton color="default" onClick={toggleMode}>
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  )
}
