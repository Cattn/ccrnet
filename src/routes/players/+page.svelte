<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import { players } from '$lib/data/players.json';
</script>

<div class="flex flex-col gap-4 items-center mt-3">
    <h1 class="text-3xl font-bold oswald-font-players underline">Players</h1>
    <div class="flex flex-col gap-2">
        {#each players as player}
            <div class="flex items-center mt-4 justify-start bg-secondary rounded-md w-full py-2 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:mx-10 sm:py-4 oswald-font-players-2">
                <img class="h-24 w-24 rounded-full ml-4 mr-3 border-cyan-400 border-2 sm:h-32 sm:w-32" alt="{player.name} Avatar" src="{player.profileImage}"/>
                <div class="flex flex-col text-left justify-start">
                    <h1 class="text-2xl font-bold text-cyan-400 sm:text-4xl">{player.name} · {player.role}</h1>
                    <Button href="/players/{player.id}" variant="link" class="hover:text-cyan-200 ml-1 p-0 justify-start">View Profile</Button>
                </div>
            </div>
        {/each}
    </div>
</div>


<style>
    .oswald-font-players {
        font-family: "Oswald", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: bold;
    }

    .oswald-font-players-2 {
        font-family: "Oswald", sans-serif;
        font-optical-sizing: auto;
        font-weight: 200;
        font-style: normal;
    }
</style>