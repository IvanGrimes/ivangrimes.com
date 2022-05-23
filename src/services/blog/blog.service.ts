import { Octokit } from 'octokit'
import { RawPost } from './types'
import { Slug } from '../../types'

const githubToken = process.env.GITHUB_TOKEN

if (!githubToken) {
  throw new Error('Environment variable GITHUB_TOKEN is not defined')
}

export class BlogService {
  private static readonly repository = 'ivangrimes.dev'

  private static readonly owner = 'IvanGrimes'

  private static readonly path = 'src/content/posts'

  private readonly client = new Octokit({
    auth: githubToken,
    userAgent: `${BlogService.owner}/${BlogService.repository}`,
  })

  private async getContent(path = BlogService.path) {
    const { owner, repository } = BlogService

    return this.client
      .request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner,
        path,
        repo: repository,
      })
      .then(({ data }) => data)
  }

  private async getPostFileByName(name: string) {
    const file = await this.getContent(`${BlogService.path}/${name}/index.mdx`)

    if (Array.isArray(file) || !('content' in file)) {
      return null
    }

    return {
      slug: name,
      path: file.path,
      content: Buffer.from(
        file.content,
        file.encoding as BufferEncoding
      ).toString(),
    }
  }

  getPost(slug: Slug) {
    return this.getPostFileByName(slug.value)
  }

  async getPostList() {
    let files: RawPost[] = []

    try {
      const content = await this.getContent()

      if (!Array.isArray(content)) {
        console.error('getPostList, something went wrong')

        return files
      }

      files = (
        await Promise.allSettled(
          content.map<Promise<RawPost | null>>(async ({ name }) =>
            this.getPostFileByName(name)
          )
        )
      )
        .map<RawPost | null>((item) => {
          if (!item) return null

          return item.status === 'fulfilled' ? item.value : null
        })
        .filter((item): item is RawPost => Boolean(item))
    } catch (e) {
      console.error(e)
    }

    return files
  }
}
