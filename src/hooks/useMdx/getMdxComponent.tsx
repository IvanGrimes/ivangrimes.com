import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { ServerSidePost } from '../../services/blog'

const mdxComponents = {}

export const getMdxComponent = ({ mdx }: ServerSidePost) => {
  const Component = getMDXComponent(mdx.value)
  const MdxComponent = ({
    components,
    ...rest
  }: Parameters<typeof Component>['0']) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component components={{ ...mdxComponents, ...components }} {...rest} />
  )

  return MdxComponent
}
