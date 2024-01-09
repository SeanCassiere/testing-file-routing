import { z } from "zod";

const PostsValidator = z.array(
	z.object({
		id: z.string(),
		title: z.string(),
		body: z.string(),
	})
);

export const fetchPosts = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await res.json();
	return PostsValidator.parse(posts);
};
