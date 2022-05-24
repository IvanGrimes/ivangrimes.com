import styled from '@emotion/styled'

export const Path = styled.path`
  fill: ${({ theme }) => (theme.palette.mode === 'light' ? '#010310' : '#fff')};
`
