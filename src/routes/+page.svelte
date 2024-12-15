<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import Autoplay from "embla-carousel-autoplay";

    let videos = ["cattn_clip_1.webm", "cattn_vid_2.webm", "cod_vid_1.webm", "fn_vid_1.webm", "other_vid_1.mp4"]
</script>

<div class="flex flex-col items-center mx-auto mt-12 justify-center">
    <h1 class="text-5xl font-black oswald-font underline text-blue-400">CCR Clan.</h1>
    
</div>

<div class="flex items-center mx-auto mt-12 justify-center">
  <Carousel.Root class="flex items-center"
    plugins={[
        Autoplay({
            delay: 2500,
        }),
    ]}
   >
    <Carousel.Content class="flex items-center">
      {#each videos as video}
        <Carousel.Item class="flex w-52">
          <video
            preload="none"
            class="w-full"
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

<style>
    .oswald-font {
        font-family: "Oswald", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: bold;
    }
</style>