import React, { PropsWithChildren } from 'react'
import {
  Container as BaseContainer,
  ContainerProps as BaseContainerProps,
} from '@chakra-ui/react'

export type ContainerProps = PropsWithChildren<
  Pick<BaseContainerProps, 'paddingY'> & {
    className?: string
  }
>

export const Container = ({
  className,
  paddingY,
  children,
}: ContainerProps) => (
  <BaseContainer
    className={className}
    maxWidth="1440px"
    minHeight="100%"
    paddingY={paddingY}
    paddingX={24}
    marginX="auto"
  >
    {children}
  </BaseContainer>
)
