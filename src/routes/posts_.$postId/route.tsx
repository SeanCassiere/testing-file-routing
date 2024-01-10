import { FileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { createFetchPostOptions } from "../../posts-related";

export const Route = new FileRoute('/posts_/$postId').createRoute({
	stringifyParams: (params) => ({ postId: `${params.postId}` }),
	parseParams: (params) => ({ postId: z.string().parse(params.postId) }),
	beforeLoad: ({ params: { postId } }) => {
		return {
			fetchPostOptions: createFetchPostOptions(postId),
		};
	},
});
