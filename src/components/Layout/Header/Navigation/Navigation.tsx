import React from 'react'
import { Grid } from '../../../Grid'
import { List, ListItem, Link } from './Navigation.styled'
import { routes } from '../../../../libs/routes'

export type NavigationProps = unknown

type NavigationItem = { title: string; route: string }

const navigationList: NavigationItem[] = [
  {
    title: 'Home',
    route: routes.home(),
  },
  {
    title: 'Blog',
    route: routes.blog(),
  },
]

export const Navigation = () => (
  <Grid container component="nav">
    <List>
      {navigationList.map(({ route, title }) => (
        <ListItem key={route}>
          <Link variant="subtitle1" route={route}>
            {title}
          </Link>
        </ListItem>
      ))}
    </List>
  </Grid>
)
