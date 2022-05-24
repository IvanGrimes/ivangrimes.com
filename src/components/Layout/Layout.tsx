import React, { PropsWithChildren } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { StyledContainer } from './Layout.styled'

export type LayoutProps = PropsWithChildren<unknown>

export const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header />
    <StyledContainer>{children}</StyledContainer>
    <Footer />
  </div>
)
