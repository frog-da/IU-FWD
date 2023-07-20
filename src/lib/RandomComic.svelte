<script lang="ts">
	import { formatDistanceToNow } from 'date-fns';
	import type { Comic } from '$lib/comic';

	export let comic: Comic;

	function comicToDate(comic: Comic) {
		return new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day));
	}
</script>

<div>
	<h2>{comic.title}</h2>
	<img src={comic.img} alt={comic.alt} />
	<div>
		Uploaded: {comicToDate(comic).toLocaleDateString()} ({formatDistanceToNow(comicToDate(comic))}
		ago)
	</div>
</div>
