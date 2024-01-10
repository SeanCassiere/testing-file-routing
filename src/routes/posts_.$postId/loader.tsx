import { FileRouteLoader } from "@tanstack/react-router";

export const loader = FileRouteLoader("/posts/$postId")(async ({
	context: { queryClient, fetchPostOptions },
}) => {
	queryClient.ensureQueryData(fetchPostOptions);
});
