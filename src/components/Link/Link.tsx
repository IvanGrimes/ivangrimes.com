import MaterialLink, {
  type LinkProps as MaterialLinkProps,
} from '@mui/material/Link'
import NextLink from 'next/link'
import React, { PropsWithChildren } from 'react'

export type LinkProps = PropsWithChildren<
  Pick<MaterialLinkProps, 'variant'> & {
    className?: string
    route: string
  }
>

export const Link = ({ route, className, variant, children }: LinkProps) => (
  <NextLink href={route} passHref>
    <MaterialLink className={className} variant={variant} underline="hover">
      {children}
    </MaterialLink>
  </NextLink>
)
