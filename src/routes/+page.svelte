<script lang="ts">
	import toon_cat from '$lib/assets/3d/toon_cat_free.glb';
	import ModelViewer from '$lib/ModelViewer.svelte';
</script>

<svelte:head>
	<title>✦ Diana's website ✦</title>
	<meta name="description" content="My personal website" />
</svelte:head>

<h1>Welcome to my website!</h1>

<ul>
	<li>Computer science tutor for high school students</li>
	<li>Developing flutter application during the capstone project course</li>
	<li>Singing in choir</li>
	<li>Learning French in duolingo</li>
</ul>

<ModelViewer src={toon_cat} alt="toon cat" />
