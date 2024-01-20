import { FileRoute } from "@tanstack/react-router";
import { fetchBlogsOptions } from "../../posts-related";

export const Route = new FileRoute('/blog/').createRoute({
	beforeLoad: () => {
		return {
			fetchBlogsOptions,
		};
	},
});
