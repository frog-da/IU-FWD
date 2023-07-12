<script lang="ts">
	import { formatDistanceToNow } from 'date-fns';

	interface Comic {
		day: string;
		month: string;
		year: string;
		num: number;
		link: string;
		news: string;
		safe_title: string;
		transcript: string;
		alt: string;
		img: string;
		title: string;
	}

	export let email: string;

	async function fetchComic() {
		const comicEl = document.getElementById('comic') as HTMLElement;
		const idResponse = await fetch(
			'https://fwd.innopolis.app/api/hw2?' + new URLSearchParams([['email', email]]).toString()
		);
		const id: string = await idResponse.json();
		const params = new URLSearchParams([['num', id.toString()]]);
		const comicResponse = await fetch('https://getxkcd.vercel.app/api/comic?' + params.toString());
		const comicData: Promise<Comic> = comicResponse.json();

		return comicData;
	}

	function comicToDate(comic: Comic) {
		return new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day));
	}
</script>

{#await fetchComic()}
	<p>...loading</p>
{:then comic}
	<div>
		<h2>{comic.title}</h2>
		<img src={comic.img} alt={comic.alt} />
		<div>
			Uploaded: {comicToDate(comic).toLocaleDateString()} ({formatDistanceToNow(comicToDate(comic))}
			ago)
		</div>
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
