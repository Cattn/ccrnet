<script lang="ts">
    import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

</script>

<div class="sticky top-0 border-b not-supersm:flex flex justify-center bg-background supersm:hidden">
  <div>
    <Button href="/" variant="link" class="hover:text-red-400">Home</Button>
    <DropdownMenu.Root>
        <DropdownMenu.Trigger class={buttonVariants({ variant: "link" })} >
            CCR
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <a href="/players"><DropdownMenu.Item>Players</DropdownMenu.Item></a>
            <a href="/about"><DropdownMenu.Item>About Us</DropdownMenu.Item></a>
            <a href="/join"><DropdownMenu.Item>Join</DropdownMenu.Item></a>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
    <Button href="/minecraft" variant="link" class="hover:text-red-400">Minecraft</Button>
    <Button href="/rankings" variant="link" class="hover:text-red-400">Rankings</Button>
  </div>
</div>