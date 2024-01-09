import { FileRoute } from "@tanstack/react-router";
import { fetchPostsOptions } from "../../posts-related";

export const Route = new FileRoute('/posts').createRoute({
	beforeLoad: () => {
		return {
			fetchPostOptions: fetchPostsOptions,
		};
	},
});
