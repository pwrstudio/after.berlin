<script lang="ts">
  import type { MusicResolved } from "$lib/types"

  // import { renderBlockText } from "$lib/modules/sanity"

  import Link from "$lib/components/Link.svelte"
  import EventComponent from "$lib/components/EventComponent.svelte"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import MusicDataItem from "$lib/components/MusicDataItem.svelte"
  import Metadata from "$lib/components/Metadata.svelte"

  let { data }: { data: { page: MusicResolved } } = $props()
  let page = $derived(data.page)

  let MusicData = $derived([
    { label: "After Catalog Number", value: page.afterCatalogNumber },
    { label: "Title", value: page.title },
    { label: "Artist", value: page.artist },
    { label: "Label", value: page.label },
    { label: "Catalog Number", value: page.catalogNumber },
    {
      label: "Issue Category",
      value: page.issueCategory === "firstIssue" ? "First Issue" : "Reissue",
    },
    { label: "First Issue Year", value: page.firstIssueYear },
    { label: "Reissue Year", value: page.reissueYear },
    { label: "First Issue Country", value: page.firstIssueCountry },
    { label: "Reissue Country", value: page.reissueCountry },
    { label: "Mastering", value: page.mastering },
    { label: "Cover", value: page.cover },
    { label: "Acquisition", value: page.acquisition },
    { label: "Tags", value: page.tags },
    { label: "Media Type", value: page.mediaType },
    { label: "Notes", value: page.notes },
  ])
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
<!-- {#if page.content && page.content.content}
  <HorizontalRule />
  <div>
    {@html renderBlockText(page.content.content)}
  </div>
{/if} -->

<style lang="scss">
  div {
    margin-bottom: var(--vertical-space);
  }
</style>
