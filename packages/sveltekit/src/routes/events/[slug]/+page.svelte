<script lang="ts">
  import type { Event } from "@sanity-types"
  import { formatDate } from "$lib/modules/date.js"
  import { renderBlockText } from "$lib/modules/sanity"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import Metadata from "$lib/components/Metadata.svelte"

  export let data: { page: Event }
  const { page } = data
</script>

<Metadata title={page.title} />

<h2>{page.title}</h2>

<HorizontalRule />

<div>
  {formatDate(page.dateTime ?? "")}
</div>

<HorizontalRule />

{#if page.about?.content}
  <div>
    {@html renderBlockText(page.about.content)}
  </div>
{/if}

<style lang="scss">
  h2 {
    font-size: var(--font-size);
    font-weight: var(--font-weight);
  }
</style>
