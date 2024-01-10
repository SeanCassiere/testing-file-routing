import { FileRoute, lazyFn, lazyRouteComponent } from '@tanstack/react-router'

import { Route as rootRoute } from './routes/__root'
import { Route as PostsRouteImport } from './routes/posts/route'
import { Route as IndexImport } from './routes/index'
import { Route as PostsPostIdRouteImport } from './routes/posts_.$postId/route'

const IndexComponentImport = new FileRoute('/index').createRoute()

const IndexComponentRoute = IndexComponentImport.update({
  path: '/index',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/index.component'),
    'component',
  ),
})

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

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

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
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      preLoaderRoute: typeof PostsRouteImport
      parentRoute: typeof rootRoute
    }
    '/index': {
      preLoaderRoute: typeof IndexComponentImport
      parentRoute: typeof rootRoute
    }
    '/posts_/$postId': {
      preLoaderRoute: typeof PostsPostIdRouteImport
      parentRoute: typeof rootRoute
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  PostsRouteRoute,
  IndexComponentRoute,
  PostsPostIdRouteRoute,
])
