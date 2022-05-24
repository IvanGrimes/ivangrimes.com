import React from 'react'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { type ThemeProviderProps, type LayoutProps } from '../components'

const ThemeProvider = dynamic<ThemeProviderProps>(() =>
  import('../components').then((m) => m.ThemeProvider)
)

const Layout = dynamic<LayoutProps>(() =>
  import('../components').then((m) => m.Layout)
)

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default MyApp
