import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { blogService, ServerSidePost } from '../../services/blog'

type Props = {
  post: ServerSidePost
}

export const getStaticProps: GetStaticProps<
  Record<string, unknown>,
  { post: string }
> = async ({ params }) => {
  if (!params) {
    return { props: {} }
  }

  const post = await blogService.getItem({ value: params.post })

  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths: GetStaticPaths<{ post: string }> = async () => {
  const list = await blogService.getList()

  return {
    paths: list.map((item) => ({ params: { post: item.slug.value } })),
    fallback: 'blocking',
  }
}

const Post = ({ post }: Props) => <div>{post.meta.title}</div>

export default Post
