<script>
  import "../app.postcss";
  import SidebarLeft from "./SidebarLeft.svelte";
  import { AppShell } from '@skeletonlabs/skeleton';
  import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>Skeleton</AppBar>
	</svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <SidebarLeft/>
	</svelte:fragment>
	<slot />
</AppShell>

<style>
</style>
