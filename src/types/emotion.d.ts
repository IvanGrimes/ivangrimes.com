import '@emotion/react'
import { type Theme as MaterialTheme } from '@mui/material/styles'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MaterialTheme {}
}
