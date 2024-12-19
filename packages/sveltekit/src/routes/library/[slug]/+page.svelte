<script lang="ts">
  import type { MusicResolved } from "$lib/types"

  import { renderBlockText } from "$lib/modules/sanity"

  import Link from "$lib/components/Link.svelte"
  import EventComponent from "$lib/components/EventComponent.svelte"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import MusicDataItem from "$lib/components/MusicDataItem.svelte"
  import Metadata from "$lib/components/Metadata.svelte"

  export let data: { page: MusicResolved }
  const { page } = data

  const MusicData = [
    { label: "After Library Number", value: page.afterLibraryNumber },
    { label: "Title", value: page.title },
    { label: "Artist", value: page.artist },
    { label: "Label", value: page.label },
    { label: "Catalog Number", value: page.catalogNumber },
    { label: "Released", value: page.released },
    { label: "Format", value: page.format },
    { label: "Country", value: page.country },
    { label: "Genre", value: page.genre },
    { label: "Style", value: page.style },
  ]
</script>

<Metadata title={page.title} />

<!-- META DATA -->
{#each MusicData as { label, value }}
  <MusicDataItem {label} {value} />
{/each}

<!-- EXTERNAL LINKS -->
{#if page.externalLinks && page.externalLinks.length > 0}
  <HorizontalRule />
  <div>- Links</div>
  <div>
    {#each page.externalLinks as link}
      <Link {link} />
    {/each}
  </div>
{/if}

<!-- EVENTS -->
{#if page.afterEvents && page.afterEvents.length > 0}
  <HorizontalRule />
  <div>- Events</div>
  <div>
    {#each page.afterEvents as event}
      <EventComponent {event} />
    {/each}
  </div>
{/if}

<!-- NOTES -->
{#if page.content && page.content.content}
  <HorizontalRule />
  <div>
    {@html renderBlockText(page.content.content)}
  </div>
{/if}

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
