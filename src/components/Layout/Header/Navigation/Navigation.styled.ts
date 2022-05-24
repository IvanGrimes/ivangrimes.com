import styled from '@emotion/styled'

export const ListItem = styled.li``

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > * + * {
    margin-left: ${({ theme }) => theme.spacing(2)};
  }
`
