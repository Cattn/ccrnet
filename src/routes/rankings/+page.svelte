<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Table from "$lib/components/ui/table/index.js";
  import { players } from '$lib/data/players.json';

  type Rank = {
      game: string;
      [key: string]: any; // Allow any additional properties
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

  const uniqueGames = Array.from(new Set(typedPlayers.flatMap(player => player.ranks.map(rank => rank.game))));

  // Helper function to filter keys that start with an uppercase letter
  const filterKeys = (keys: string[]) => keys.filter(key => /^[A-Z]/.test(key));
</script>

<div class="flex flex-col items-center mx-6 mt-12 justify-center">
  <h1 class="text-4xl font-black oswald-font">Rankings</h1>
  <p class="mt-2 text-xl text-gray-400">Clan Leaderboard</p>
</div>

{#each uniqueGames as game}
<div class="flex flex-col items-center w-[90%] sm:w-[70%] mx-auto mt-8 justify-center">
  <h2 class="text-2xl font-bold">{game}</h2>
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head class="w-[200px]">Player</Table.Head>
        {#each Array.from(new Set(typedPlayers.flatMap(player => player.ranks.filter(rank => rank.game === game).flatMap(rank => filterKeys(Object.keys(rank).filter(key => key !== 'game')))))) as stat}
          <Table.Head>{stat.charAt(0).toUpperCase() + stat.slice(1)}</Table.Head>
        {/each}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each typedPlayers as player}
        {#if player.ranks.some(rank => rank.game === game)}
          <Table.Row>
            <Table.Cell class="font-medium">{player.name}</Table.Cell>
            {#each Array.from(new Set(typedPlayers.flatMap(player => player.ranks.filter(rank => rank.game === game).flatMap(rank => filterKeys(Object.keys(rank).filter(key => key !== 'game')))))) as stat}
              <Table.Cell>{player.ranks.find(rank => rank.game === game)?.[stat] || 'N/A'}</Table.Cell>
            {/each}
          </Table.Row>
        {/if}
      {/each}
    </Table.Body>
  </Table.Root>
</div>
{/each}



<style>
    .oswald-font {
        font-family: "Oswald", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: bold;
    }
</style>