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
	<div class="mx-auto ml-10 mr-10 mt-12 flex items-center justify-center">
		<img
			class="ml-5 mr-5 h-32 w-32 rounded-full border-2 border-cyan-400"
			alt="{data.player.name} Avatar"
			src={data.player.profileImage}
		/>
		<div class="ml-5 mr-5">
			<h1 class="oswald-font-players text-4xl font-bold text-cyan-400">
				{data.player.name} · {data.player.role} · #{data.player.id}
			</h1>
			<p class="mt-2 text-xl text-gray-400">{data.player.description}</p>
			<div class="flex">
				{#if data.player.socials}
					{#each data.player.socials as social, i}
						<!-- svelte-ignore attribute_quoted -->
						<div class="oswald-font-players">
							<Button href={social.link} variant="link" class="p-0 hover:text-cyan-200"
								>{social.name}</Button
							>
						</div>
						{#if i < data.player.socials.length - 1}
							<h1 class="ml-2 mr-2 text-3xl text-blue-400">·</h1>
						{/if}
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<hr class="my-8 border-t-2 border-gray-300" />

	<div class="mx-auto mt-12 flex items-center justify-center">
		<h1 class="text-2xl font-bold text-rose-300">Rankings</h1>
	</div>
	<div class="mx-auto mt-4 flex w-[90%] items-center justify-center sm:w-[50%]">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[200px]">Game</Table.Head>
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
{:else}
	<div class="mx-auto mt-12 flex items-center justify-center">
		<h1 class="text-2xl font-bold text-rose-300">Player Not Found!</h1>
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
