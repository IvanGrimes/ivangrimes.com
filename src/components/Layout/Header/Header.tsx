import React from 'react'
import { Logo } from './Logo'
import { Container } from '../../Container'
import { Grid } from '../../Grid'
import { Navigation } from './Navigation'
import { Box } from '../../Box'
import { ThemeSwitch } from './ThemeSwitch'

export type HeaderProps = unknown

export const Header = () => (
  <Box
    sx={{
      paddingY: 1.5,
      borderBottom: '1px solid',
      borderColor: 'primary.main',
    }}
  >
    <Container>
      <Grid container alignItems="center">
        <Grid container item xs={3}>
          <Logo />
        </Grid>
        <Grid item xs={6}>
          <Navigation />
        </Grid>
        <Grid container item xs={3} justifyContent="flex-end">
          <ThemeSwitch />
        </Grid>
      </Grid>
    </Container>
  </Box>
)
