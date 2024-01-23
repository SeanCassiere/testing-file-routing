import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, RouteApi } from "@tanstack/react-router";

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
			<p className='py-2'>
				<Link
					to='/posts/$postId/deep'
					params={{ postId }}
					className='underline'
				>
					Go to the deep route for post {postId}.
				</Link>
			</p>
			<div className='max-w-full overflow-x-auto'>
				<code>
					<pre>{JSON.stringify(post, null, 2)}</pre>
				</code>
			</div>
		</div>
	);
};
