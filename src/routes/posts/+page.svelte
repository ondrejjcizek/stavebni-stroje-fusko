<script lang="ts">
	import Article from '../../components/Article.svelte';
	import PageHeader from '../../components/PageHeader.svelte';
	import PostsGrid from '../../components/PostsGrid.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<PageHeader title="Příspěvky" />
<PostsGrid>
	{#each data.item as item}
		<Article id={item.id} title={item.title.rendered} content={item.content.rendered} />
	{/each}
</PostsGrid>
