<script lang="ts">
	export let title: string;
	export let content: string;
	export let id: number;
</script>

<a href="posts/{id}">
	<article class="prose mx-auto hover:bg-slate-800 hover:bg-opacity-10 p-4 rounded-lg">
		<h1 class="mb-0">{title}</h1>
		<div class="line-clamp-3">{@html content}</div>
	</article>
</a>
