import { FileRouteLoader } from "@tanstack/react-router";

export const loader = FileRouteLoader("/posts")(async ({
	context: { queryClient, fetchPostsOptions },
}) => {
	queryClient.ensureQueryData(fetchPostsOptions);
});
