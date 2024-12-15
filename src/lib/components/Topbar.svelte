<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
</script>

<div
	class="not-supersm:flex supersm:hidden sticky top-0 flex justify-center border-b bg-background"
>
	<div class="oswald-font-topbar">
		<Button href="/" variant="link" class="hover:text-red-400">Home</Button>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class={buttonVariants({ variant: 'link' })}>CCR</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group>
					<a class="oswald-font-drop" href="/players"
						><DropdownMenu.Item>Players</DropdownMenu.Item></a
					>
					<a class="oswald-font-drop" href="/about"
						><DropdownMenu.Item>About Us</DropdownMenu.Item></a
					>
					<a class="oswald-font-drop" href="/join"><DropdownMenu.Item>Join</DropdownMenu.Item></a>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		<Button href="/minecraft" variant="link" class="hover:text-red-400">Minecraft</Button>
		<Button href="/rankings" variant="link" class="hover:text-red-400">Rankings</Button>
	</div>
</div>

<style>
	.oswald-font-topbar {
		font-family: 'Oswald', sans-serif;
		font-optical-sizing: auto;
		font-weight: 300;
		font-style: bold;
	}
	.oswald-font-drop {
		font-family: 'Oswald', sans-serif;
		font-optical-sizing: auto;
		font-weight: 600;
		font-style: bold;
	}
</style>
