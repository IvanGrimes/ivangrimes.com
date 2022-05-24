import styled from '@emotion/styled'

export const Navigation = styled.nav`
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  width: 100%;
  background: ${(p) =>
    p.theme.palette.mode === 'light'
      ? p.theme.palette.grey['200']
      : p.theme.palette.grey['800']};
  box-shadow: ${(p) => p.theme.shadows[4]};
`

export const List = styled.div`
  list-style-type: none;
  margin: 0;
  padding: ${(p) => p.theme.spacing(2.5)} 0;

  & > * + * {
    margin-top: ${(p) => p.theme.spacing(1.5)};
  }
`

export const ListItem = styled.li`
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(p) => p.theme.palette.grey['300']};
    opacity: 0;
    border-radius: ${(p) => p.theme.spacing(0.5)};
    transition: opacity
      ${(p) =>
        `${p.theme.transitions.duration.shortest}ms ${p.theme.transitions.easing.sharp}`};
  }

  &:hover {
    &::before {
      opacity: ${(p) => (p.theme.palette.mode === 'light' ? 0.7 : 0.1)};
    }
  }

  && > * {
    display: block;
    position: relative;
    z-index: 2;
    font-weight: 500;
    padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(1.5)};
  }
`
