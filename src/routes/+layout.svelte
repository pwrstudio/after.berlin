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
    width: 41ch;
    margin-left: 1ch;
    font-size: var(--font-size);
    line-height: 1.2em;
    margin-bottom: 2.4em;

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
