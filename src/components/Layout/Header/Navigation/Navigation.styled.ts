import styled from '@emotion/styled'
import { Link as BaseLink } from '../../../Link'

export const ListItem = styled.li``

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > * + * {
    margin-left: ${({ theme }) => theme.spacing(4)};
  }
`

export const Link = styled(BaseLink)`
  text-transform: capitalize;
  font-size: 1.075rem;
`
