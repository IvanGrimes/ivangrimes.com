import React from 'react'
import { Logo } from './Logo'
import { Container } from '../../Container'
import { Box } from '../../Box'
import { Grid } from '../../Grid'
import { Navigation } from './Navigation'

export type HeaderProps = unknown

export const Header = () => (
  <Box
    as="header"
    paddingY={4}
    backgroundColor="blackAlpha.50"
    backdropBlur="base"
    borderBottomWidth="1px"
    boxShadow="sm"
  >
    <Container>
      <Grid alignItems="center">
        <Grid.Item colSpan={3}>
          <Logo />
        </Grid.Item>
        <Grid.Item colSpan={6} colStart={4}>
          <Navigation />
        </Grid.Item>
      </Grid>
    </Container>
  </Box>
)
