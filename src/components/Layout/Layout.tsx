import React, { PropsWithChildren } from 'react'

export type LayoutProps = PropsWithChildren<{}>

export const Layout = ({ children }: LayoutProps) => <div>{children}</div>
