import MaterialLink, {
  type LinkProps as MaterialLinkProps,
} from '@mui/material/Link'
import NextLink from 'next/link'
import React, { PropsWithChildren } from 'react'

export type LinkProps = PropsWithChildren<
  Pick<MaterialLinkProps, 'variant' | 'color' | 'underline'> & {
    className?: string
    route: string
  }
>

export const Link = ({
  route,
  className,
  variant,
  color,
  children,
  underline = 'hover',
}: LinkProps) => (
  <NextLink href={route} passHref>
    <MaterialLink
      className={className}
      variant={variant}
      color={color}
      underline={underline}
    >
      {children}
    </MaterialLink>
  </NextLink>
)
