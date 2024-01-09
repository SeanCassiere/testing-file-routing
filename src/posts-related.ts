import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";

const PostSchema = z.object({
	id: z.preprocess(String, z.string()),
	title: z.string(),
	body: z.string(),
});

const PostListSchema = z.array(PostSchema);

const fetchPosts = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const postData = await res.json();
	const parsedPosts = PostListSchema.parse(postData);
	return parsedPosts;
};

export const fetchPostsOptions = queryOptions({
	queryKey: ["posts", "all"],
	queryFn: fetchPosts,
});

const fetchPost = async (postId: string) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);
	const postData = await res.json();
	const parsedPost = PostSchema.parse(postData);
	return parsedPost;
};

export const createFetchPostOptions = (postId: string) =>
	queryOptions({
		queryKey: ["posts", postId],
		queryFn: () => fetchPost(postId),
	});
