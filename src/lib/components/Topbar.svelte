<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
</script>

<div
	class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-16 items-center">
		<div class="mr-4 flex">
			<a href="/" class="mr-6 flex items-center space-x-2">
				<span class="oswald-font-topbar text-xl font-bold">CCR</span>
			</a>
			<nav class="flex items-center space-x-6 text-sm font-medium">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost' })}>CCR</DropdownMenu.Trigger>
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
				<a href="/minecraft" class={buttonVariants({ variant: 'ghost' })}>Minecraft</a>
				<a href="/rankings" class={buttonVariants({ variant: 'ghost' })}>Rankings</a>
			</nav>
		</div>
	</div>
</div>

<style>
	.oswald-font-topbar {
		font-family: 'Oswald', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: bold;
	}
	.oswald-font-drop {
		font-family: 'Oswald', sans-serif;
		font-optical-sizing: auto;
		font-weight: 500;
		font-style: normal;
	}
</style>
