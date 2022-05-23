import * as MDX from 'mdx-bundler'
import getReadingTime from 'reading-time'
import { BlogService } from './blog.service'
import { ServerSidePost, PostMeta, BasePostMeta, RawPost } from './types'
import { Slug } from '../../types'

class BlogController {
  constructor(private readonly service: BlogService) {}

  private static async mapRawPostToServerSidePost(
    rawPost: RawPost
  ): Promise<ServerSidePost> {
    console.log(1)
    const { frontmatter, code, matter } = await MDX.bundleMDX({
      source: rawPost.content,
      files: {},
      mdxOptions: (options) => ({
        ...options,
        format: 'mdx',
      }),
    })
    const baseMeta = frontmatter as BasePostMeta
    const meta: PostMeta = {
      ...baseMeta,
      date: baseMeta.date.toString(),
      readingTime: Math.ceil(getReadingTime(matter.content).minutes),
    }

    return {
      slug: {
        value: rawPost.slug,
      },
      meta,
      mdx: {
        value: code,
      },
    }
  }

  async getItem(slug: Slug): Promise<ServerSidePost> {
    const rawItem = await this.service.getPost(slug)

    if (!rawItem) {
      throw new Error('Something went wrong')
    }

    return BlogController.mapRawPostToServerSidePost(rawItem)
  }

  async getList(): Promise<ServerSidePost[]> {
    const rawList = await this.service.getPostList()

    return Promise.all(
      rawList.map((rawPost) =>
        BlogController.mapRawPostToServerSidePost(rawPost)
      )
    )
  }
}

export const blogController = new BlogController(new BlogService())
