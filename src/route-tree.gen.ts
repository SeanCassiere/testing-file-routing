// This file is auto-generated by TanStack Router

import { lazyFn, lazyRouteComponent } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsRouteImport } from './routes/posts/route'
import { Route as IndexRouteImport } from './routes/index.route'
import { Route as BlogIndexRouteImport } from './routes/blog/index.route'
import { Route as PostsPostIdRouteImport } from './routes/posts_.$postId/route'
import { Route as BlogBlogIdRouteImport } from './routes/blog/$blogId.route'
import { Route as PostsPostIdDeepRouteImport } from './routes/posts_.$postId.deep/route'

// Create/Update Routes

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

const BlogIndexRouteRoute = BlogIndexRouteImport.update({
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any)
  .updateLoader({
    loader: lazyFn(() => import('./routes/blog/index.loader'), 'loader'),
  })
  .update({
    component: lazyRouteComponent(
      () => import('./routes/blog/index.component'),
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

const BlogBlogIdRouteRoute = BlogBlogIdRouteImport.update({
  path: '/blog/$blogId',
  getParentRoute: () => rootRoute,
} as any)
  .updateLoader({
    loader: lazyFn(() => import('./routes/blog/$blogId.loader'), 'loader'),
  })
  .update({
    component: lazyRouteComponent(
      () => import('./routes/blog/$blogId.component'),
      'component',
    ),
  })

const PostsPostIdDeepRouteRoute = PostsPostIdDeepRouteImport.update({
  path: '/deep',
  getParentRoute: () => PostsPostIdRouteRoute,
} as any)
  .updateLoader({
    loader: lazyFn(
      () => import('./routes/posts_.$postId.deep/loader'),
      'loader',
    ),
  })
  .update({
    component: lazyRouteComponent(
      () => import('./routes/posts_.$postId.deep/component'),
      'component',
    ),
  })

// Populate the FileRoutesByPath interface

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
    '/blog/$blogId': {
      preLoaderRoute: typeof BlogBlogIdRouteImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      preLoaderRoute: typeof PostsPostIdRouteImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      preLoaderRoute: typeof BlogIndexRouteImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId/deep': {
      preLoaderRoute: typeof PostsPostIdDeepRouteImport
      parentRoute: typeof PostsPostIdRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRouteRoute,
  PostsRouteRoute,
  BlogBlogIdRouteRoute,
  PostsPostIdRouteRoute.addChildren([PostsPostIdDeepRouteRoute]),
  BlogIndexRouteRoute,
])
