import { FileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = new FileRoute('/posts/$postId').createRoute({
	stringifyParams: (params) => ({ postId: `${params.postId}` }),
	parseParams: (params) => ({ postId: z.string().parse(params.postId) }),
});
