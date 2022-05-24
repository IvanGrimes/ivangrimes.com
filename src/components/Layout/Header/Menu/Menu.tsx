import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '../../../IconButton'
import { Collapse } from '../../../Collapse'
import { Navigation, List, ListItem } from './Menu.styled'
import { ClickAwayListener } from '../../../ClickAwayListener'
import { Container } from '../../../Container'
import { Link } from '../../../Link'
import { navigationList } from '../navigationList'

export const Menu = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <IconButton onClick={() => setOpen((s) => !s)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Navigation>
          <Collapse in={isOpen}>
            <Container>
              <List>
                {navigationList.map(({ title, route }) => (
                  <ListItem key={route}>
                    <Link
                      route={route}
                      variant="subtitle1"
                      underline="none"
                      color="text.secondary"
                    >
                      {title}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Container>
          </Collapse>
        </Navigation>
      </div>
    </ClickAwayListener>
  )
}
