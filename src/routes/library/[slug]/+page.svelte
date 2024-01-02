<script lang="ts">
  import Link from "$lib/components/Link.svelte"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import { formatDate } from "$lib/modules/date.js"
  import { renderBlockText } from "$lib/modules/sanity"
  export let data
  const { page } = data
</script>

<h2>- Title: {page.title}</h2>

<div>
  - Interpreter: {page.interpreter}
</div>

<div>
  - Composer: {page.composer}
</div>

<div>
  - Label: {page.label}
</div>

<div>
  - Catalogue Number: {page.catalogueNumber}
</div>

<div>
  - Played on: {formatDate(page.date)}
</div>

<HorizontalRule />

{#if page.links && page.links.length > 0}
  <div>
    {#each page.links as link}
      <Link {link} />
    {/each}
  </div>
{/if}

<div>
  {@html renderBlockText(page.content?.content ?? [])}
</div>

<style lang="scss">
  h2 {
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    margin-bottom: var(--vertical-space);
  }

  div {
    margin-bottom: var(--vertical-space);
  }
</style>
