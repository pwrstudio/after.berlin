<script lang="ts">
  import { page } from "$app/stores"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"

  $: extended = $page.route?.id === "/library"
  $: console.log($page)
</script>

<main class:extended>
  <!-- TITLE -->
  <h1>
    <a href="/" data-sveltekit-preload-data>after</a>
  </h1>

  <HorizontalRule {extended} />

  <slot />
</main>

<style lang="scss">
  main {
    margin-top: 1.2em;
    margin-left: 1ch;
    margin-right: 1ch;
    font-size: var(--font-size);
    margin-bottom: 4.8em;

    overflow-x: hidden;
    max-width: 90vw;
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
