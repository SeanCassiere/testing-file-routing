import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/').createRoute({
	component: Home,
});

function Home() {
	return "index.tsx";
}
