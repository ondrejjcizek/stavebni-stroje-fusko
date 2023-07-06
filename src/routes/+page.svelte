<script lang="ts">
	import type { PageData } from './$types';
	import Article from '../components/Article.svelte';
	import PostsGrid from '../components/PostsGrid.svelte';
	import Slider from '../components/Slider.svelte';

	export let data: PageData;
</script>

<!-- <Slider /> -->
<PostsGrid>
	{#each data.item as item, index}
		{#if index < 2}
			<Article id={item.id} title={item.title.rendered} content={item.content.rendered} />
		{/if}
	{/each}
</PostsGrid>
<a href="posts" class="btn">All posts</a>
