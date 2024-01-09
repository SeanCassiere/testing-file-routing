import { Link, Outlet, rootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = rootRouteWithContext()({
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
					to={"/posts"}
					activeProps={{ className: "font-bold" }}
					activeOptions={{ exact: true }}
				>
					Posts
				</Link>
				<Link
					to='/posts/$postId'
					activeProps={{ className: "font-bold" }}
					params={{ postId: "123" }}
				>
					Post 123
				</Link>
			</div>
			<hr />
			<Outlet />
			{/* Start rendering router matches */}
			<TanStackRouterDevtools position='bottom-right' />
		</>
	);
}
