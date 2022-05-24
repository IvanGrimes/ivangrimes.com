import styled from '@emotion/styled'
import { Container } from '../Container'

export const StyledContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing(4)};
  min-height: 100vh;
`
