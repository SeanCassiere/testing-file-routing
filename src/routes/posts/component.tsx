import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, RouteApi } from "@tanstack/react-router";

const api = new RouteApi({ id: "/posts" });

export const component = function PostsComponent() {
	const { fetchPostsOptions } = api.useRouteContext();

	const query = useSuspenseQuery(fetchPostsOptions);
	const posts = query.data;

	return (
		<div className='p-2'>
			<h3 className='mb-4'>You are at /posts</h3>
			<div>
				<ul className='list-disc pl-4 border border-slate-200 max-w-lg flex flex-col gap-2'>
					{[
						{ id: "i-do-not-exist", title: "Non-existent Post" },
						...posts,
					]?.map((post) => {
						return (
							<li
								key={post.id}
								className='whitespace-nowrap border border-slate-300'
							>
								<Link
									to='/posts/$postId'
									params={{
										postId: post.id,
									}}
									className='block py-1 text-blue-800 hover:text-blue-600'
									activeProps={{ className: "text-black font-bold" }}
								>
									<div>{post.title.substring(0, 20)}</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
