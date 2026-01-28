<script lang="ts">
  import { page } from "$app/stores"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import type { Snippet } from "svelte"

  let { children }: { children: Snippet } = $props()

  let extended = $derived($page.route?.id === "/library")
</script>

<main class:extended>
  <!-- TITLE -->
  <h1>
    <a href="/" data-sveltekit-preload-data>after</a>
  </h1>

  <HorizontalRule {extended} />

  {@render children()}
</main>

<style lang="scss">
  main {
    margin-top: 2ch;
    margin-left: 2ch;
    margin-right: 2ch;
    font-size: var(--font-size);
    margin-bottom: 10ch;

    overflow-x: hidden;
    max-width: calc(100vw - 4ch);
    width: var(--normal-width);

    &.extended {
      width: var(--extended-width);
    }

    h1 {
      font-weight: var(--font-weight);
      font-size: var(--font-size);
      margin-top: 0;
      margin-bottom: 0;
      display: block;
      margin-right: auto;
      margin-left: auto;

      a {
        background: var(--color-secondary);

        &:hover {
          background: unset;
        }
      }
    }
  }
</style>
