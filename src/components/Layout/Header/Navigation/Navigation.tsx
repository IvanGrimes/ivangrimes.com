import React from 'react'
import { Grid } from '../../../Grid'
import { List, ListItem, Link } from './Navigation.styled'
import { navigationList } from '../navigationList'

export type NavigationProps = unknown

export const Navigation = () => (
  <Grid container component="nav">
    <List>
      {navigationList.map(({ route, title }) => (
        <ListItem key={route}>
          <Link variant="subtitle1" color="text.primary" route={route}>
            {title}
          </Link>
        </ListItem>
      ))}
    </List>
  </Grid>
)
