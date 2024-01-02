<script lang="ts">
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
</script>

<main>
  <!-- TITLE -->
  <h1>
    <a href="/" data-sveltekit-preload-data>after</a>
  </h1>

  <HorizontalRule />

  <slot />
</main>

<style lang="scss">
  main {
    margin-top: 1.2em;
    margin-left: 1ch;
    margin-right: 1ch;
    font-size: var(--font-size);
    margin-bottom: 4.8em;
    max-width: 90vw;
    width: 80ch;

    h1 {
      font-weight: var(--font-weight);
      font-size: var(--font-size);
      margin-top: 0;
      margin-bottom: 0;
      display: inline-block;
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
