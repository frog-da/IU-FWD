<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<svelte:head>
	<script
		type="module"
		src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"
	></script>
</svelte:head>

<model-viewer
	camera-controls
	touch-action="pan-y"
	autoplay
	ar
	ar-modes="webxr scene-viewer"
	auto-rotate
	shadow-intensity="1"
	{src}
	{alt}
/>

<style>
	model-viewer {
		display: block;
		width: 300px;
		height: 300px;
	}
</style>
