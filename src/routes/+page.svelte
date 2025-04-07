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

<div class="relative min-h-screen">
	<div class="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 pt-16 sm:px-6">
		<h1 class="oswald-font bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-black text-transparent sm:text-6xl">
			CCR Clan
		</h1>
		<p class="mt-4 text-center text-lg text-gray-400 sm:text-xl">Competitive Gaming Community</p>
	</div>

	<div class="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-16 sm:px-6">
		<div class="w-full max-w-4xl">
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
							<div class="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
								<video
									preload="none"
									class="h-auto w-full transform transition-transform group-hover:scale-105"
									src="/videos/{video}"
									autoplay
									muted
									loop
								></video>
								<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous class="absolute left-2 top-1/2 -translate-y-1/2" />
				<Carousel.Next class="absolute right-2 top-1/2 -translate-y-1/2" />
			</Carousel.Root>
		</div>
	</div>

	<div class="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6">
		<h2 class="text-2xl font-bold text-gray-100 sm:text-3xl">Featured Members</h2>
		<div class="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
			{#each players.slice(0, 3) as player}
				<div class="group relative flex flex-col items-center rounded-xl bg-background-tertiary p-6 shadow-lg transition-all hover:shadow-xl">
					<div class="relative mb-4">
						<img
							class="h-24 w-24 rounded-full border-2 border-cyan-400 transition-transform group-hover:scale-110"
							alt="{player.name} Avatar"
							src={player.profileImage}
						/>
						<div class="absolute -bottom-1 -right-1 rounded-full bg-cyan-400 px-2 py-1 text-xs font-bold text-white">
							{player.role}
						</div>
					</div>
					<h3 class="text-xl font-bold text-gray-100">{player.name}</h3>
					<Button
						href="/players/{player.id}"
						variant="ghost"
						class="mt-2 text-sm text-gray-400 hover:text-cyan-400"
						>View Profile</Button
					>
				</div>
			{/each}
		</div>
		{#if players.length > 3}
			<Button
				href="/players"
				variant="outline"
				class="mt-8 text-gray-400 hover:text-cyan-400"
				>View All Members</Button
			>
		{/if}
	</div>

	<div class="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6">
		<div class="w-full max-w-3xl rounded-xl bg-background-tertiary p-8 shadow-lg">
			<h2 class="text-2xl font-bold text-gray-100 sm:text-3xl">About Us</h2>
			<p class="mt-4 text-gray-400">
				This is an Invite Only "Clan" that partakes in videogames. We have a series of games we take part in.
			</p>
			<Button
				href="/about"
				variant="ghost"
				class="mt-4 text-cyan-400 hover:text-cyan-500"
				>Learn more about CCR →</Button
			>
		</div>
	</div>
</div>

<style>
	.oswald-font {
		font-family: 'Oswald', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: bold;
	}
</style>
