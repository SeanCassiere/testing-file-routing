import { FileRoute } from "@tanstack/react-router";
import { createFetchPostOptions } from "../../posts-related";

export const Route = new FileRoute("/posts/$postId/deep").createRoute({
	beforeLoad: ({ params: { postId } }) => {
		return {
			fetchPostOptions: createFetchPostOptions(postId),
		};
	},
});
