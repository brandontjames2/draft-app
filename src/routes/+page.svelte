<script lang="ts">
  import { SlideToggle } from "@skeletonlabs/skeleton";
  import { setModeCurrent, getModeAutoPrefers } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { autoModeWatcher } from "@skeletonlabs/skeleton";

  let value: boolean = false;
  let isLoading: boolean = true;

  onMount(() => {
    value = !getModeAutoPrefers();
    console.log("user prefence is: " + value);
    isLoading = false;
  });

  function toggle() {
    console.log("changing value to: " + value);
    setModeCurrent(!value);
  }
</script>

<svelte:head>
  {@html `<script>(${autoModeWatcher.toString()})();</script>`}
</svelte:head>

{#if !isLoading}
  <div class="mb-8">
    <h2>{value === false ? "Light" : "Dark"}</h2>
    <SlideToggle
      name="lightDarkToggle"
      bind:checked={value}
      on:change={toggle}
    />
  </div>
{/if}

<button class="btn variant-filled-primary block mb-2">Primary</button>
<button class="btn variant-filled-secondary block mb-2">Secondary</button>
<button class="btn variant-filled-tertiary block mb-2">Tertiary</button>
<button class="btn variant-filled-success block mb-2">Success</button>
<button class="btn variant-filled-warning block mb-2">Warning</button>
<button class="btn variant-filled-error block mb-2">Error</button>
<button class="btn variant-filled-surface block mb-2">Surface</button>

<style>
</style>
