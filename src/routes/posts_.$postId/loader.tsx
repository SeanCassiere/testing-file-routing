import { FileRouteLoader } from "@tanstack/react-router";

export const loader = FileRouteLoader("/posts_/$postId")(async ({
	context: { queryClient, fetchPostOptions },
}) => {
	queryClient.ensureQueryData(fetchPostOptions);
});
