<script lang="ts">
	import '../app.css';
	import Topbar from '$lib/components/Topbar.svelte';
	let { children } = $props();
</script>
<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=VT323&display=swap');
	</style>
</svelte:head>

<Topbar />
{@render children()}
