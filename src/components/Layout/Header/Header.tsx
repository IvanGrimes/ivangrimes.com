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
      paddingY: 2,
      borderBottom: '1px solid',
      borderColor: 'primary.main',
    }}
  >
    <Container>
      <Grid container alignItems="center" spacing={2}>
        <Grid container item xs={4} md={3}>
          <Logo />
        </Grid>
        <Grid item xs={5} md={6}>
          <Navigation />
        </Grid>
        <Grid container item xs={3} justifyContent="flex-end">
          <ThemeSwitch />
        </Grid>
      </Grid>
    </Container>
  </Box>
)
