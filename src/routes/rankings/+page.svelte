<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import { players } from '$lib/data/players.json';

	type Rank = {
		game: string;
		[key: string]: any;
	};

	type Player = {
		id: number;
		name: string;
		role: string;
		description: string;
		ranks: Rank[];
		socials: {
			name: string;
			link: string;
		}[];
		profileImage: string;
	};

	const typedPlayers = players as Player[];

	const uniqueGames = Array.from(
		new Set(typedPlayers.flatMap((player) => player.ranks.map((rank) => rank.game)))
	);

	const filterKeys = (keys: string[]) => keys.filter((key) => /^[A-Z]/.test(key));
</script>

<div class="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6">
	<h1 class="oswald-font text-3xl font-black sm:text-4xl">Rankings</h1>
	<p class="mt-2 text-lg text-gray-400 sm:text-xl">Clan Leaderboard</p>
</div>

{#each uniqueGames as game}
	<div class="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6">
		<h2 class="text-xl font-bold sm:text-2xl">{game}</h2>
		<div class="mt-4 w-full overflow-x-auto">
			<Table.Root class="min-w-full">
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-[150px] sm:w-[200px]">Player</Table.Head>
						{#each Array.from(new Set(typedPlayers.flatMap((player) => player.ranks
									.filter((rank) => rank.game === game)
									.flatMap( (rank) => filterKeys(Object.keys(rank).filter((key) => key !== 'game')) )))) as stat}
							<Table.Head class="whitespace-nowrap">{stat.charAt(0).toUpperCase() + stat.slice(1)}</Table.Head>
						{/each}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each typedPlayers
						.filter((player) => player.ranks.some((rank) => rank.game === game))
						.sort((a, b) => {
							const aRank = a.ranks.find((rank) => rank.game === game)?.['Clan Rank'];
							const bRank = b.ranks.find((rank) => rank.game === game)?.['Clan Rank'];
							if (!aRank || !bRank) return 0;
							return parseInt(aRank.replace('#', '')) - parseInt(bRank.replace('#', ''));
						}) as player}
						<Table.Row>
							<Table.Cell class="font-medium">{player.name}</Table.Cell>
							{#each Array.from(new Set(typedPlayers.flatMap((player) => player.ranks
											.filter((rank) => rank.game === game)
											.flatMap( (rank) => filterKeys(Object.keys(rank).filter((key) => key !== 'game')) )))) as stat}
								<Table.Cell class="whitespace-nowrap"
									>{player.ranks.find((rank) => rank.game === game)?.[stat] || 'N/A'}</Table.Cell
								>
							{/each}
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</div>
{/each}

<style>
	.oswald-font {
		font-family: 'Oswald', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: bold;
	}
</style>
