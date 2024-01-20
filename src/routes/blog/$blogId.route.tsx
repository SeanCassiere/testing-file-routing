import { FileRoute } from "@tanstack/react-router";
import { createFetchBlogPostOptions } from "../../posts-related";

export const Route = new FileRoute('/blog/$blogId').createRoute({
	beforeLoad: ({ params: { blogId } }) => {
		return {
			fetchBlogIdOptions: createFetchBlogPostOptions(blogId),
		};
	},
});
