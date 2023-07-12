<script lang="ts">
	import { base } from '$app/paths';
</script>

<footer>
	<nav>
		<a href="{base}/">Cat's home</a> ✧
		<a href="{base}/photos">Photos</a> ✧
		<a href="{base}/comic">Comic image</a> ✧
		<a href="{base}/contacts">Contact Me</a>
	</nav>
</footer>

<style>
	footer {
		min-height: 50px;
		background: gainsboro;
		padding: 10px 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
