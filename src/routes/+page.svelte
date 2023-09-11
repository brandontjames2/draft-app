<script lang="ts">
  import { autoModeWatcher } from "@skeletonlabs/skeleton";
</script>

<svelte:head
  >{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head
>

<div class="h-2000">
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt laboriosam
    mollitia delectus modi ratione? Debitis, labore? Pariatur exercitationem
    fuga accusamus. Ipsum ea id deleniti provident modi aliquid et nulla ab!
  </p>
</div>

<style>
  .h-2000 {
    height: 6000px;
  }
</style>
