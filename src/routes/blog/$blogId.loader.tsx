import { FileRouteLoader } from "@tanstack/react-router";

export const loader = FileRouteLoader("/blog/$blogId")(async ({
	context: { queryClient, fetchBlogIdOptions },
}) => {
	queryClient.ensureQueryData(fetchBlogIdOptions);
});
