import { useMemo } from 'react'
import { ServerSidePost } from '../../services/blog'
import { getMdxComponent } from './getMdxComponent'

export const useMdx = (serverSidePost: ServerSidePost) =>
  useMemo(() => getMdxComponent(serverSidePost), [serverSidePost])
