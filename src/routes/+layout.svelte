<script lang="ts">
	import '../app.css';
	import Topbar from '$lib/components/Topbar.svelte';
	let { children } = $props();
</script>

<Topbar />
{@render children()}
