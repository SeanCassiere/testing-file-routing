import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/').createRoute({
	component: Home,
});

function Home() {
	return (
		<div className='p-2'>
			<h3 className='mb-4'>You are at /</h3>
		</div>
	);
}
