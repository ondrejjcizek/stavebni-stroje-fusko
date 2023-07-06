<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	const photos = [
		'https://dummyimage.com/1920x1080/000/fff',
		'https://dummyimage.com/1600x1400/000/fff'
	];
</script>

<div class="Slider">
	<Splide aria-label="My Favorite Images">
		{#each photos as photo, i}
			<SplideSlide>
				<img src={photo} alt={`Image ${i}`} />
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style lang="stylus">
    .Slider
        position relative

        img
            // position absolute
            // width 100%
            // height 100%
            // object-fit cover
</style>
