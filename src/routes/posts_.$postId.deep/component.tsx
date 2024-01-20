import { useSuspenseQuery } from "@tanstack/react-query";
import { RouteApi } from "@tanstack/react-router";

const api = new RouteApi({ id: "/posts/$postId/deep" });

export const component = function PostIdDeepComponent() {
	const { postId } = api.useParams();
	const { fetchPostOptions } = api.useRouteContext();

	const query = useSuspenseQuery(fetchPostOptions);
	const post = query.data;

	return (
		<div className='p-2'>
			<h3 className='mb-4'>You are at /posts/$postId/deep</h3>
			<p>Deep Post ID: {postId}</p>
			<p>{post.body}</p>
		</div>
	);
};
