<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/posts">Zpět na příspěvky</a>
<article class="prose mx-auto">
	<h1 class="text-center">{data.item.title.rendered}</h1>
	<div class="text-center">{@html data.item.content.rendered}</div>
</article>
