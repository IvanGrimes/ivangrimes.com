import React from 'react'
import type { AppProps } from 'next/app'
import { Layout, ThemeProvider } from '../components'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default MyApp
