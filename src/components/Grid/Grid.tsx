import React, {
  ComponentType,
  FunctionComponent,
  PropsWithChildren,
} from 'react'
import { Grid as BaseGrid } from '@chakra-ui/react'
import { GridItemProps, GridItem } from './GridItem'
import { COLUMNS } from './const'

export type GridProps = PropsWithChildren<{
  gap?: number
  wrap?: boolean
}>

type CompoundComponents = {
  Item: ComponentType<GridItemProps>
}

export const Grid: FunctionComponent<GridProps> & CompoundComponents = ({
  gap,
  wrap = false,
  children,
}) => (
  <BaseGrid
    templateColumns={`repeat(${COLUMNS}, 1fr)`}
    gap={gap}
    flexWrap={wrap ? 'nowrap' : 'wrap'}
  >
    {children}
  </BaseGrid>
)

Grid.Item = GridItem
