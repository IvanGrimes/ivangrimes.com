import React, { useMemo } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { blogService, ServerSidePost } from '../../services/blog'
import { getMdxComponent } from '../../hooks'

type Props = {
  postList: ServerSidePost[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  let postList: Props['postList'] = []
  try {
    postList = await blogService.getList()
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      postList,
    },
  }
}

const Blog: NextPage<Props> = ({ postList }) => {
  const list = useMemo(
    () =>
      postList.map((item) => {
        const { meta, slug } = item
        const Post = getMdxComponent(item)

        return (
          <Link key={meta.title} href={`/blog/${slug.value}`} passHref>
            <a>
              <h3>{meta.title}</h3>
              <h6>Reading time: {meta.readingTime} min</h6>
              <Post />
            </a>
          </Link>
        )
      }),
    [postList]
  )

  return <div>{list}</div>
}

export default Blog
