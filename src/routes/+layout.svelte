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

<div class="relative min-h-screen">
	<div class="absolute inset-0 -z-10 h-full w-full bg-background">
		<div class="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-50"></div>
		<div class="absolute inset-0 h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,#1a1a1a,transparent)] opacity-30"></div>
	</div>
	<div class="min-h-screen">
		<Topbar />
		<main class="relative">
			{@render children()}
		</main>
		<footer class="mt-20 border-t border-gray-800 bg-background-tertiary/50">
			<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6">
				<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div class="flex flex-col items-center sm:items-start">
						<h3 class="oswald-font-players bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-lg font-bold text-transparent">CCR Clan</h3>
						<p class="mt-2 text-center text-sm text-gray-400 sm:text-left">A competitive gaming community dedicated to excellence and teamwork.</p>
					</div>
					<div class="flex flex-col items-center sm:items-start">
						<h3 class="oswald-font-players text-lg font-bold text-gray-100">Quick Links</h3>
						<div class="mt-4 flex flex-col gap-2">
							<a href="/" class="text-sm text-gray-400 hover:text-cyan-400">Home</a>
							<a href="/players" class="text-sm text-gray-400 hover:text-cyan-400">Players</a>
							<a href="/rankings" class="text-sm text-gray-400 hover:text-cyan-400">Rankings</a>
							<a href="/join" class="text-sm text-gray-400 hover:text-cyan-400">Join Us</a>
						</div>
					</div>
					<div class="flex flex-col items-center sm:items-start">
						<h3 class="oswald-font-players text-lg font-bold text-gray-100">Connect</h3>
						<div class="mt-4 flex flex-col gap-2">
							<a href="https://x.com/CCRClan" class="text-sm text-gray-400 hover:text-blue-400">Twitter</a>
							<a href="https://www.tiktok.com/@ccrclan27" class="text-sm text-gray-400 hover:text-pink-400">Tiktok</a>
							<a href="https://twitch.com" class="text-sm text-gray-400 hover:text-purple-400">Twitch</a>
						</div>
					</div>
					<div class="flex flex-col items-center sm:items-start">
						<h3 class="oswald-font-players text-lg font-bold text-gray-100">Credits</h3>
						<div class="mt-4 flex flex-col gap-2">
							<p class="text-sm text-gray-400">Made with ❤️ by</p>
							<a href="https://github.com/cattn" class="text-sm text-cyan-400 hover:text-cyan-300">Cattn</a>
						</div>
					</div>
				</div>
				<div class="mt-12 border-t border-gray-800 pt-8">
					<p class="text-center text-xs text-gray-500">© 2024 CCR Clan & Cattn. All rights reserved.</p>
				</div>
			</div>
		</footer>
	</div>
</div>

<style>
	.oswald-font-players {
		font-family: 'Oswald', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: bold;
	}
</style>
