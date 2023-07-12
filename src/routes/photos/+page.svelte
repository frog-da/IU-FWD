<script lang="ts">
	import image1 from '$lib/assets/images/image1.jpg';
	import image2 from '$lib/assets/images/image2.jpg';
	import image3 from '$lib/assets/images/image3.jpg';
</script>

<div class="gallery">
	<img src={image1} alt="Flowers" />
	<img src={image2} alt="Nails" />
	<img src={image3} alt="Me" />
</div>

<style>
	.gallery {
		flex-wrap: wrap;
		padding: 15px;
		display: flex;
		justify-content: center;
	}

	.gallery img {
		flex: 0 0 auto;
		margin: 15px;
		width: 30%;
		height: 30%;
	}
</style>
