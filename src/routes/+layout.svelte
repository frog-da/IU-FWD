<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '$lib/app.css';
</script>

<svelte:head>
	<meta name="author" content="Diana Tomilovskaya" />
</svelte:head>

<div id="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	#app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		min-width: 900px;
		margin: auto;
	}
</style>
