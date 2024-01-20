import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, RouteApi } from "@tanstack/react-router";

const api = new RouteApi({ id: "/blog/" });

export const component = function BlogsComponent() {
	const { fetchBlogsOptions } = api.useRouteContext();

	const query = useSuspenseQuery(fetchBlogsOptions);
	const blogs = query.data;

	return (
		<div className='p-2'>
			<h3 className='mb-4'>You are at /blog</h3>
			<div>
				<ul className='list-disc pl-4 border border-teal-200 max-w-lg flex flex-col gap-2'>
					{[
						{ id: "i-do-not-exist", title: "Non-existent Post" },
						...blogs,
					]?.map((blog) => {
						return (
							<li
								key={blog.id}
								className='whitespace-nowrap border border-slate-300'
							>
								<Link
									to='/blog/$blogId'
									params={{
										blogId: blog.id,
									}}
									className='block py-1 text-blue-800 hover:text-blue-600'
									activeProps={{ className: "text-black font-bold" }}
								>
									<div>{blog.title.substring(0, 20)}</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
