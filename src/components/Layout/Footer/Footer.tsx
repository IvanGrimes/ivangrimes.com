import React from 'react'
import { Container } from '../../Container'
import { Divider } from '../../Divider'
import { Typography } from '../../Typography'
import { Box } from '../../Box'

export const Footer = () => (
  <footer>
    <Container>
      <Divider />

      <Box
        sx={{
          py: 6,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Copyright © 2022 Material UI SAS.
        </Typography>
      </Box>
    </Container>
  </footer>
)
