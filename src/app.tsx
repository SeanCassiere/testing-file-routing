import { Router, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./route-tree.gen";

// Set up a Router instance
const router = new Router({
	routeTree,
	defaultPreload: "intent",
});

// Register things for type-safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function App() {
	return <RouterProvider router={router} />;
}

export default App;
