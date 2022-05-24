import styled from '@emotion/styled'

export const Path = styled.path`
  fill: ${({ theme }) => (theme.palette.mode === 'light' ? '#010310' : '#fff')};
  transition: fill
    ${({ theme }) =>
      `${theme.transitions.duration.shortest}ms ${theme.transitions.easing.sharp}`};
`
