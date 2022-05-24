import React from 'react'
import { Grid } from '../../../Grid'
import { List, ListItem } from './Navigation.styled'
import { Link } from '../../../Link'
import { routes } from '../../../../libs/routes'

export type NavigationProps = unknown

export const Navigation = () => (
  <Grid container component="nav">
    <List>
      <ListItem>
        <Link route={routes.home()}>Home</Link>
      </ListItem>
      <ListItem>
        <Link route={routes.blog()}>Blog</Link>
      </ListItem>
    </List>
  </Grid>
)
