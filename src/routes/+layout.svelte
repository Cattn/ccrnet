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

<footer>
	<div class="mt-10 flex flex-col items-center justify-center bg-secondary p-4 text-white">
		<p class="mb-2 text-lg">
			Made with ❤️ by <a href="https://github.com/cattn" class="text-cyan-400 hover:text-cyan-200"
				>Cattn</a
			>
		</p>
		<p class="text-sm">
			Follow us on
			<a href="https://twitter.com/example" class="ml-1 text-blue-400 hover:text-blue-300"
				>Twitter</a
			>
			|
			<a href="https://facebook.com/example" class="ml-1 text-purple-400 hover:text-blue-500"
				>Tiktok</a
			>
			|
			<a href="https://instagram.com/example" class="ml-1 text-pink-400 hover:text-pink-300"
				>Twitch</a
			>
		</p>
		<p class="mt-2 text-xs">© 2024 CCR Clan. & Cattn All rights reserved.</p>
	</div>
</footer>
