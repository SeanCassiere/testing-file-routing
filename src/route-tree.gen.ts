import { lazyFn, lazyRouteComponent } from '@tanstack/react-router'

import { Route as rootRoute } from './routes/__root'
import { Route as PostsRouteImport } from './routes/posts/route'
import { Route as IndexRouteImport } from './routes/index.route'
import { Route as PostsPostIdRouteImport } from './routes/posts_.$postId/route'

const PostsRouteRoute = PostsRouteImport.update({
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)
  .updateLoader({
    loader: lazyFn(() => import('./routes/posts/loader'), 'loader'),
  })
  .update({
    component: lazyRouteComponent(
      () => import('./routes/posts/component'),
      'component',
    ),
  })

const IndexRouteRoute = IndexRouteImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/index.component'),
    'component',
  ),
})

const PostsPostIdRouteRoute = PostsPostIdRouteImport.update({
  path: '/posts/$postId',
  getParentRoute: () => rootRoute,
} as any)
  .updateLoader({
    loader: lazyFn(() => import('./routes/posts_.$postId/loader'), 'loader'),
  })
  .update({
    component: lazyRouteComponent(
      () => import('./routes/posts_.$postId/component'),
      'component',
    ),
  })
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      preLoaderRoute: typeof PostsRouteImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      preLoaderRoute: typeof PostsPostIdRouteImport
      parentRoute: typeof rootRoute
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRouteRoute,
  PostsRouteRoute,
  PostsPostIdRouteRoute,
])
