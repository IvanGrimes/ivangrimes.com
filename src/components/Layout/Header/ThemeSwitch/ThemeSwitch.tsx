import React from 'react'
import { useThemeProvider } from '../../../ThemeProvider'
import { Grid } from '../../../Grid'

export const ThemeSwitch = () => {
  const { toggleMode } = useThemeProvider()

  return (
    <Grid container>
      <button type="button" onClick={toggleMode}>
        toggle theme
      </button>
    </Grid>
  )
}
