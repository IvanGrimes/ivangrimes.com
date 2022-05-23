import React, { PropsWithChildren } from 'react'
import { GridItem as BaseGridItem } from '@chakra-ui/react'
import { Columns } from './const'

export type GridItemProps = PropsWithChildren<{
  colSpan: Columns
  colStart: Columns
  colEnd: Columns
}>

export const GridItem = ({
  children,
  colStart,
  colEnd,
  colSpan,
}: GridItemProps) => (
  <BaseGridItem colStart={colStart} colEnd={colEnd} colSpan={colSpan}>
    {children}
  </BaseGridItem>
)
