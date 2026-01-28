<script lang="ts">
  let { extended = false }: { extended?: boolean } = $props()

  const CHARACTER = "-"
  let characterCount = $state(50)

  $effect(() => {
    characterCount = extended ? 80 : 50
  })
  let horizontalRule: HTMLElement | undefined = $state()

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

  $effect(() => {
    const timeout = setTimeout(() => {
      calculateCharacterCount()
    }, 100)
    return () => clearTimeout(timeout)
  })
</script>

<svelte:window onresize={calculateCharacterCount} />

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
