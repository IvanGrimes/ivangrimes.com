import { ChakraProvider } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

export type ThemeProviderProps = PropsWithChildren<unknown>

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <ChakraProvider>{children}</ChakraProvider>
)
