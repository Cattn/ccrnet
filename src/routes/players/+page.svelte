<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { players } from '$lib/data/players.json';
</script>

<div class="mt-3 flex flex-col items-center gap-4">
	<h1 class="oswald-font-players text-3xl font-bold underline">Players</h1>
	<div class="flex flex-col gap-2">
		{#each players as player}
			<div
				class="oswald-font-players-2 mt-4 flex w-full items-center justify-start rounded-md bg-secondary py-2 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:mx-10 sm:py-4"
			>
				<img
					class="ml-4 mr-3 h-24 w-24 rounded-full border-2 border-cyan-400 sm:h-32 sm:w-32"
					alt="{player.name} Avatar"
					src={player.profileImage}
				/>
				<div class="flex flex-col justify-start text-left">
					<h1 class="text-2xl font-bold text-cyan-400 sm:text-4xl">
						{player.name} · {player.role}
					</h1>
					<Button
						href="/players/{player.id}"
						variant="link"
						class="ml-1 justify-start p-0 hover:text-cyan-200">View Profile</Button
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
		font-weight: 600;
		font-style: bold;
	}

	.oswald-font-players-2 {
		font-family: 'Oswald', sans-serif;
		font-optical-sizing: auto;
		font-weight: 200;
		font-style: normal;
	}
</style>
