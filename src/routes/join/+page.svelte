<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6">
	<h1 class="oswald-font text-2xl font-black underline sm:text-4xl">How to Join</h1>
<p class="mt-4 text-center text-base text-gray-400 sm:text-lg"We are not accepting any new members at this time.</p>
	<Button
		href="https://discord.gg/5DqAzjSh9C"
		variant="secondary"
		class="mt-8 p-6 text-lg font-light underline sm:p-10 sm:text-3xl">Apply in the Discord!</Button
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
