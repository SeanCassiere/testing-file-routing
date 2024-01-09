import { RouteApi } from "@tanstack/react-router";

const api = new RouteApi({ id: "/posts/$postId" });

export const component = function PostIdComponent() {
	const { postId } = api.useParams();

	console.log("/posts/$postId postId:", postId);

	return (
		<div className='p-2'>
			<h3>On the PostId page</h3>
			<p>Post ID: {postId}</p>
		</div>
	);
};
