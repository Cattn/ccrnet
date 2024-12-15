<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import { players } from '$lib/data/players.json';
	let videos = [
		'cattn_clip_1.webm',
		'cattn_vid_2.webm',
		'cod_vid_1.webm',
		'fn_vid_1.webm',
		'other_vid_1.mp4'
	];
</script>

<div class="mx-auto mt-12 flex flex-col items-center justify-center">
	<h1 class="oswald-font text-5xl font-black text-blue-400 underline">CCR Clan.</h1>
</div>

<div class="ml-5 mt-12 flex items-center justify-center">
	<div class="w-full max-w-4xl sm:pl-4">
		<Carousel.Root
			class="flex w-full items-center"
			plugins={[
				Autoplay({
					delay: 2500
				})
			]}
		>
			<Carousel.Content class="flex w-full items-center">
				{#each videos as video}
					<Carousel.Item class="flex w-full p-2 sm:w-1/2 lg:w-1/3">
						<video
							preload="none"
							class="h-auto w-full rounded-md shadow-lg"
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

<div class="mx-auto mt-12 flex items-center justify-center">
	<h1 class="text-3xl font-bold text-rose-300">Members</h1>
</div>

<div class="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
	{#each players.slice(0, 3) as player}
		<div class="bg-background-tertiary flex flex-col items-center rounded-md p-2">
			<img
				class="mb-1 h-12 w-12 rounded-full"
				alt="{player.name} Avatar"
				src={player.profileImage}
			/>
			<div>
				<h1 class="text-lg font-semibold text-cyan-400">{player.name}</h1>
				<p class="text-gray-400">{player.role}</p>
				<Button href="/players/{player.id}" variant="link" class="p-0 hover:text-cyan-200"
					>View Profile</Button
				>
			</div>
		</div>
	{/each}
</div>

<div class="flex items-center justify-center">
	{#if players.length > 3}
		<Button href="/players" variant="secondary" class="hover:text-cyan-200">View All</Button>
	{/if}
</div>

<div class="mx-auto mt-12 flex items-center justify-center">
	<h1 class="text-3xl font-bold text-rose-300">About us</h1>
</div>

<div class="mx-auto p-5 mb-10 flex flex-col items-center justify-center">
	<p class="text-xl text-gray-400">We are the skibidi clan bro! we love skibidi! onskibidifn!</p>
	<Button href="/about" variant="link" class="ml-1 p-0 text-xl hover:text-cyan-200"
		>➜ Learn more...</Button
	>
</div>

<style>
	.oswald-font {
		font-family: 'Oswald', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: bold;
	}
</style>
