import { Link, Outlet, rootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { queryClient } from "../react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface RouterAppContext {
	queryClient: typeof queryClient;
}

export const Route = rootRouteWithContext<RouterAppContext>()({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<div className='p-2 flex gap-2 text-lg'>
				<Link
					to='/'
					activeProps={{ className: "font-bold" }}
					activeOptions={{ exact: true }}
				>
					Home
				</Link>
				<Link
					to='/posts'
					activeProps={{ className: "font-bold" }}
					activeOptions={{ exact: true }}
				>
					Posts
				</Link>
				<Link
					to='/posts/$postId'
					activeProps={{ className: "font-bold" }}
					params={{ postId: "1" }}
				>
					Post 1
				</Link>
				<Link
					to='/posts/$postId/deep'
					activeProps={{ className: "font-bold" }}
					params={{ postId: "1" }}
				>
					Post 1 Deep
				</Link>
				<Link
					to='/blog'
					activeProps={{ className: "font-bold" }}
					activeOptions={{ exact: true }}
				>
					Blog
				</Link>
				<Link
					to='/blog/$blogId'
					activeProps={{ className: "font-bold" }}
					params={{ blogId: "1" }}
				>
					Blog 1
				</Link>
			</div>
			<hr />
			<Outlet />
			{/* Start rendering router matches */}
			<TanStackRouterDevtools position='bottom-right' />
			<ReactQueryDevtools position='bottom' buttonPosition='bottom-left' />
		</>
	);
}
