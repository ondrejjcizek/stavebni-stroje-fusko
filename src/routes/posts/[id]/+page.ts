import { PUBLIC_API_KEY } from '$env/static/public';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const res = await fetch(`${PUBLIC_API_KEY}${params.id}`);
	const item = await res.json();

	return { item };
}) satisfies PageLoad;
