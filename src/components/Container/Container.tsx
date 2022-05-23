import React, { PropsWithChildren } from 'react'

export type ContainerProps = PropsWithChildren<{}>

export const Container = ({ children }: ContainerProps) => <div>{children}</div>
