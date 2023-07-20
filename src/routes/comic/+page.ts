import type { Comic } from '$lib/comic';
import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = true;

export const load = (async ({ fetch }) => {
	const idResponse = await fetch(
		'https://fwd.innopolis.app/api/hw2?' +
			new URLSearchParams([['email', 'd.tomilovskaia@innopolis.university']]).toString()
	);
	const id: string = await idResponse.json();
	const comicParams = new URLSearchParams([['num', id.toString()]]);
	const comicResponse = await fetch(
		'https://getxkcd.vercel.app/api/comic?' + comicParams.toString()
	);
	const comicData: Promise<Comic> = comicResponse.json();

	return { comic: await comicData };
}) satisfies PageLoad;
