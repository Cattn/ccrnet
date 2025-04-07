<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { players } from '$lib/data/players.json';
</script>

<div class="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center gap-4 px-4 sm:px-6">
	<h1 class="oswald-font-players bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">Players</h1>
	<div class="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each players as player}
			<div
				class="group relative flex flex-col items-center rounded-xl bg-background-tertiary p-6 shadow-lg transition-all hover:shadow-xl"
			>
				<div class="relative mb-4">
					<img
						class="h-24 w-24 rounded-full border-2 border-cyan-400 transition-transform group-hover:scale-110 sm:h-32 sm:w-32"
						alt="{player.name} Avatar"
						src={player.profileImage}
					/>
					<div class="absolute -bottom-1 -right-1 rounded-full bg-cyan-400 px-2 py-1 text-xs font-bold text-white">
						{player.role}
					</div>
				</div>
				<div class="flex flex-col items-center text-center">
					<h1 class="text-xl font-bold text-gray-100 sm:text-2xl">
						{player.name}
					</h1>
					<Button
						href="/players/{player.id}"
						variant="ghost"
						class="mt-2 text-sm text-gray-400 hover:text-cyan-400 sm:text-base">View Profile</Button
					>
				</div>
			</div>
		{/each}
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
