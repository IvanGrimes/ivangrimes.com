import React from 'react'
import { Logo } from './Logo'
import { Container } from '../../Container'
import { Grid } from '../../Grid'
import { Navigation } from './Navigation'
import { Box } from '../../Box'
import { ThemeSwitch } from './ThemeSwitch'
import { Menu } from './Menu'

export const Header = () => (
  <Box
    sx={(theme) => ({
      position: 'relative',
      paddingY: 2,
      borderBottom: '1px solid',
      borderColor: 'grey.500',
      backgroundColor: theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',
    })}
  >
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Grid container item xs={6} sm={3}>
          <Logo />
        </Grid>
        <Grid
          item
          sm={6}
          sx={(theme) => ({
            [theme.breakpoints.down('sm')]: {
              display: 'none',
            },
          })}
        >
          <Navigation />
        </Grid>
        <Grid
          container
          item
          xs={6}
          sm={3}
          spacing={1}
          justifyContent="flex-end"
        >
          <Grid item>
            <ThemeSwitch />
          </Grid>

          <Grid
            item
            sx={(theme) => ({
              [theme.breakpoints.up('sm')]: {
                display: 'none',
              },
            })}
          >
            <Menu />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>
)
