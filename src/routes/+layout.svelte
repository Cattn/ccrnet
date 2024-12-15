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
    <div class="flex flex-col items-center justify-center bg-secondary mt-10 p-4 text-white">
        <p class="text-lg mb-2">
            Made with ❤️ by <a href="https://github.com/cattn" class="text-cyan-400 hover:text-cyan-200">Cattn</a>
        </p>
        <p class="text-sm">
            Follow us on 
            <a href="https://twitter.com/example" class="text-blue-400 hover:text-blue-300 ml-1">Twitter</a> | 
            <a href="https://facebook.com/example" class="text-purple-400 hover:text-blue-500 ml-1">Tiktok</a> | 
            <a href="https://instagram.com/example" class="text-pink-400 hover:text-pink-300 ml-1">Twitch</a>
        </p>
        <p class="text-xs mt-2">© 2024 CCR Clan. & Cattn All rights reserved.</p>
    </div>
</footer>