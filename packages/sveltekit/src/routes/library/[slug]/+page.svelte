<script lang="ts">
  import type { Music } from "@sanity-types"

  import { renderBlockText } from "$lib/modules/sanity"

  import Link from "$lib/components/Link.svelte"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import MusicDataItem from "$lib/components/MusicDataItem.svelte"

  export let data: { page: Music }
  const { page } = data

  console.log(page)
  const MusicData = [
    { label: "Title", value: page.title },
    { label: "Artist", value: page.artist },
    { label: "Label", value: page.label },
    { label: "Format", value: page.format },
    { label: "Country", value: page.country },
    { label: "Released", value: page.released },
    { label: "Catalog Number", value: page.catalogNumber },
    { label: "Genre", value: page.genre },
    { label: "Style", value: page.style },
  ]

  console.log(MusicData)
</script>

{#each MusicData as { label, value }}
  <MusicDataItem {label} {value} />
{/each}

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
