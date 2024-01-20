import { FileRouteLoader } from "@tanstack/react-router";

export const loader = FileRouteLoader("/posts/$postId/deep")(async ({
	context: { queryClient, fetchPostOptions },
}) => {
	queryClient.ensureQueryData(fetchPostOptions);
});
