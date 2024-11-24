<script lang="ts">
  import { onMount } from "svelte"

  export let extended = false

  const CHARACTER = "-"
  let characterCount = extended ? 80 : 50 // Default value
  let horizontalRule: HTMLElement

  function calculateCharacterCount() {
    if (horizontalRule) {
      const parentWidth = horizontalRule.parentElement?.offsetWidth ?? 0
      const characterWidth = horizontalRule.offsetWidth
        ? horizontalRule.offsetWidth / characterCount
        : 10 // Fallback to a default width if offsetWidth is 0
      characterCount = parentWidth
        ? Math.floor(parentWidth / characterWidth)
        : characterCount
    }
  }

  onMount(calculateCharacterCount)
</script>

<svelte:window on:resize={calculateCharacterCount} />

<div bind:this={horizontalRule} class="horizontal-rule">
  {#each Array(characterCount) as _}
    {CHARACTER}
  {/each}
</div>

<style>
  .horizontal-rule {
    margin-top: var(--vertical-space);
    margin-bottom: var(--vertical-space);
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
  }
</style>
