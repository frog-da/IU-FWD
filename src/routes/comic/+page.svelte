<script lang="ts">
	import RandomComic from '$lib/RandomComic.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>✦ Random Comic ✦</title>
	<meta name="description" content="Random comic" />
</svelte:head>

<RandomComic comic={data.comic} />
