import React from 'react'
import BaseContainer, {
  type ContainerProps as BaseContainerProps,
} from '@mui/material/Container'

export type ContainerProps = Omit<BaseContainerProps, 'maxWidth' | 'fixed'>

export const Container = (props: ContainerProps) => (
  <BaseContainer {...props} maxWidth="lg" />
)
