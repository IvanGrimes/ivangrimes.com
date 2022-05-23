import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
