<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import Autoplay from "embla-carousel-autoplay";
    import { players } from '$lib/data/players.json';
    let videos = ["cattn_clip_1.webm", "cattn_vid_2.webm", "cod_vid_1.webm", "fn_vid_1.webm", "other_vid_1.mp4"]
</script>

<div class="flex flex-col items-center mx-auto mt-12 justify-center">
    <h1 class="text-5xl font-black oswald-font underline text-blue-400">CCR Clan.</h1>
    
</div>

<div class="flex items-center ml-5 mt-12 justify-center">
  <div class="w-full max-w-4xl sm:pl-4">
    <Carousel.Root
      class="flex items-center w-full"
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
    >
      <Carousel.Content class="flex items-center w-full">
        {#each videos as video}
          <Carousel.Item class="flex w-full sm:w-1/2 lg:w-1/3 p-2">
            <video
              preload="none"
              class="w-full h-auto rounded-md shadow-lg"
              src="/videos/{video}"
              autoplay
              muted
              loop
            >
            </video>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel.Root>
  </div>
</div>

<div class="flex items-center mx-auto mt-12 justify-center">
    <h1 class="text-3xl font-bold text-rose-300">Members</h1>
</div>

<div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
    {#each players.slice(0, 3) as player}
        <div class="flex flex-col items-center bg-background-tertiary rounded-md p-2">
            <img class="h-12 w-12 rounded-full mb-1" alt="{player.name} Avatar" src="{player.profileImage}"/>
            <div>
                <h1 class="text-lg font-semibold text-cyan-400">{player.name}</h1>
                <p class="text-gray-400">{player.role}</p>
                <Button href="/players/{player.id}" variant="link" class="hover:text-cyan-200 p-0">View Profile</Button>
            </div>
        </div>
    {/each}
</div>

<div class="flex items-center justify-center">
    {#if players.length > 3}
        <Button href="/players" variant="secondary" class="hover:text-cyan-200">View All</Button>
    {/if}
</div>

<div class="flex items-center mx-auto mt-12 justify-center">
    <h1 class="text-3xl font-bold text-rose-300">About us</h1>
</div>

<div class="flex items-center mx-auto justify-center mb-10">
  <p class="text-xl text-gray-400">We are the skibidi clan bro! we love skibidi! onskibidifn!</p>
  <Button href="/players" variant="link" class="hover:text-cyan-200 p-0 text-xl ml-1">➜ Learn more...</Button>
</div>

<style>
    .oswald-font {
        font-family: "Oswald", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: bold;
    }
</style>