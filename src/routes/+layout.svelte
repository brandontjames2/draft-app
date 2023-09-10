<script>
  import "../app.postcss";
  import Header from "./Header.svelte";
</script>

<div>
  <Header></Header>

  <main>
    <slot />
  </main>

  <footer>
    <p>
      visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
  </footer>
</div>

<style>
</style>
