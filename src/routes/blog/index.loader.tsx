import { FileRouteLoader } from "@tanstack/react-router";

export const loader = FileRouteLoader("/blog/")(async ({
	context: { queryClient, fetchBlogsOptions },
}) => {
	queryClient.ensureQueryData(fetchBlogsOptions);
});
