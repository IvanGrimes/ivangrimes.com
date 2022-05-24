import { routes } from '../../../libs/routes'

export type NavigationItem = { title: string; route: string }

export const navigationList: NavigationItem[] = [
  {
    title: 'Home',
    route: routes.home(),
  },
  {
    title: 'Blog',
    route: routes.blog(),
  },
]
