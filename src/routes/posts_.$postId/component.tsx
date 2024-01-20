import { useSuspenseQuery } from "@tanstack/react-query";
import { RouteApi } from "@tanstack/react-router";

const api = new RouteApi({ id: "/posts/$postId" });

export const component = function PostIdComponent() {
	const { postId } = api.useParams();
	const { fetchPostOptions } = api.useRouteContext();

	const query = useSuspenseQuery(fetchPostOptions);
	const post = query.data;

	return (
		<div className='p-2'>
			<h3 className='mb-4'>You are at /posts/$postId</h3>
			<p>Post ID: {postId}</p>
			<div className='max-w-full overflow-x-auto'>
				<code>
					<pre>{JSON.stringify(post, null, 2)}</pre>
				</code>
			</div>
		</div>
	);
};
