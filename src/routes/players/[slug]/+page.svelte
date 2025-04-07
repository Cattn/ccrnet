<script lang="ts">
	import type { PageData } from './$types';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Table from '$lib/components/ui/table/index.js';

	interface Rank {
		game: string;
		rank: string;
		peak: string;
		clanRank?: string;
		'Clan Rank'?: string;
		clankRank?: string;
	}

	let {
		data
	}: {
		data: {
			player: {
				socials: any;
				description: any;
				id: any;
				role: any;
				profileImage: string | null | undefined;
				name: any;
				ranks: Rank[];
			};
		};
	} = $props();
</script>

{#if data.player}
	<div class="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center px-4 sm:px-6">
		<div class="flex w-full flex-col items-center gap-6 sm:flex-row sm:items-start">
			<img
				class="h-24 w-24 rounded-full border-2 border-cyan-400 sm:h-32 sm:w-32"
				alt="{data.player.name} Avatar"
				src={data.player.profileImage}
			/>
			<div class="flex flex-col items-center text-center sm:items-start sm:text-left">
				<h1 class="oswald-font-players text-2xl font-bold text-cyan-400 sm:text-3xl">
					{data.player.name} · {data.player.role} · #{data.player.id}
				</h1>
				<p class="mt-2 text-base text-gray-400 sm:text-lg">{data.player.description}</p>
				<div class="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
					{#if data.player.socials}
						{#each data.player.socials as social, i}
							<div class="oswald-font-players">
								<Button href={social.link} variant="link" class="p-0 text-sm hover:text-cyan-200 sm:text-base"
									>{social.name}</Button
								>
								{#if i < data.player.socials.length - 1}
									<span class="mx-2 text-blue-400">·</span>
								{/if}
							</div>
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</div>
	<hr class="my-8 border-t-2 border-gray-300" />

	<div class="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center px-4 sm:px-6">
		<h1 class="text-xl font-bold text-rose-300 sm:text-2xl">Rankings</h1>
		<div class="mt-4 w-full overflow-x-auto">
			<Table.Root class="min-w-full">
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-[150px] sm:w-[200px]">Game</Table.Head>
						<Table.Head>Rank</Table.Head>
						<Table.Head>Peak Rank</Table.Head>
						<Table.Head class="text-right">Clan Ranking</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each data.player.ranks as rank: Rank}
						<Table.Row>
							<Table.Cell class="font-medium">{rank.game}</Table.Cell>
							<Table.Cell>{rank.rank}</Table.Cell>
							<Table.Cell>{rank.peak}</Table.Cell>
							<Table.Cell class="text-right">
								{#if 'clanRank' in rank}
									{rank.clanRank}
								{:else if 'Clan Rank' in rank}
									{rank['Clan Rank']}
								{:else if 'clankRank' in rank}
									{rank.clankRank}
								{:else}
									N/A
								{/if}
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</div>
{:else}
	<div class="mx-auto mt-8 flex w-full max-w-7xl items-center justify-center px-4 sm:px-6">
		<h1 class="text-xl font-bold text-rose-300 sm:text-2xl">Player Not Found!</h1>
	</div>
{/if}

<style>
	.oswald-font-players {
		font-family: 'Oswald', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: bold;
	}
</style>
