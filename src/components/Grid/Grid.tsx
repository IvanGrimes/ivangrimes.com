import React, {
  ComponentType,
  FunctionComponent,
  PropsWithChildren,
} from 'react'
import { Grid as BaseGrid, GridProps as BaseGridProps } from '@chakra-ui/react'
import { GridItemProps, GridItem } from './GridItem'
import { COLUMNS } from './const'

export type GridProps = PropsWithChildren<
  Pick<BaseGridProps, 'gap' | 'flexWrap' | 'alignItems' | 'justifyContent'>
>

type CompoundComponents = {
  Item: ComponentType<GridItemProps>
}

export const Grid: FunctionComponent<GridProps> & CompoundComponents = ({
  gap,
  flexWrap = 'nowrap',
  justifyContent,
  alignItems,
  children,
}) => (
  <BaseGrid
    templateColumns={`repeat(${COLUMNS}, 1fr)`}
    gap={gap}
    flexWrap={flexWrap}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {children}
  </BaseGrid>
)

Grid.Item = GridItem
