import { useSuspenseQuery } from "@tanstack/react-query";
import { RouteApi } from "@tanstack/react-router";

const api = new RouteApi({ id: "/blog/$blogId" });

export const component = function BlogIdComponent() {
	const { blogId } = api.useParams();
	const { fetchBlogIdOptions } = api.useRouteContext();

	const query = useSuspenseQuery(fetchBlogIdOptions);
	const post = query.data;

	return (
		<div className='p-2'>
			<h3 className='mb-4'>You are at /blog/$blogId</h3>
			<p>Blog ID: {blogId}</p>
			<div className='max-w-full overflow-x-auto'>
				<code>
					<pre>{JSON.stringify(post, null, 2)}</pre>
				</code>
			</div>
		</div>
	);
};
