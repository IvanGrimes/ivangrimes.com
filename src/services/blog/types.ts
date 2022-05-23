import { Mdx, Slug } from '../../types'

export type RawPost = {
  slug: string
  path: string
  content: string
}

export type BasePostMeta = {
  title: string
  date: string
  description: string
  categories: string[]
  meta: {
    keywords: string
  }
  component: string
}

export type PostMeta = BasePostMeta & {
  readingTime: number
}

export type ServerSidePost = {
  slug: Slug
  meta: PostMeta
  mdx: Mdx
}
