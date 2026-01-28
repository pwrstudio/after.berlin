<script lang="ts">
  import { formatDate } from "$lib/modules/date.js"
  import { renderBlockText } from "$lib/modules/sanity"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import Metadata from "$lib/components/Metadata.svelte"
  import type { EventResolved } from "$lib/types"
  import MusicComponent from "$lib/components/MusicComponent.svelte"

  let { data }: { data: { page: EventResolved } } = $props()
  let page = $derived(data.page)
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

<!-- MUSIC -->
{#if page.relatedMusic && page.relatedMusic.length > 0}
  <HorizontalRule />
  <div class="header">- Music</div>
  <div>
    {#each page.relatedMusic as music}
      <MusicComponent {music} />
    {/each}
  </div>
{/if}

<style lang="scss">
  h2 {
    font-size: var(--font-size);
    font-weight: var(--font-weight);
  }

  .header {
    margin-bottom: var(--vertical-space);
  }
</style>
