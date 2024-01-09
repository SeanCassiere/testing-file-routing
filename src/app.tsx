import { Router, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./route-tree.gen";
import { queryClient } from "./react-query";
import { QueryClientProvider } from "@tanstack/react-query";

// Set up a Router instance
const router = new Router({
	routeTree,
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	context: {
		queryClient,
	},
});

// Register things for type-safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
