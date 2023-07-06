<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<Header />
<main class="md:container mx-auto p-6">
	<slot />
</main>
