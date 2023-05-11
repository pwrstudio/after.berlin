<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import Ticker from "$lib//components/Ticker.svelte"
  export let data
  const { frontpage, pages, events } = data

  function formatDateTime(dateTime: string) {
    const formattedDateTime = dateTime.substring(0, 10)
    return formattedDateTime
  }
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
      font-weight: 200;
      font-size: var(--font-size);
      margin-top: 0;
      margin-bottom: 0;
      display: inline-block;
      margin-right: auto;
      margin-left: auto;

      a {
        background: var(--color-secondary);
        border-bottom: unset;

        &:hover {
          background: unset;
          border-bottom: var(--border-weight) solid var(--color-secondary);
        }
      }
    }
  }
</style>
