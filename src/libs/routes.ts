export const routes = {
  home: () => '/',
  blog: () => '/blog',
  post: ({ post }: { post: string }) => `/blog/${post}`,
}
