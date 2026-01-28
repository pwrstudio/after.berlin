<script lang="ts">
  import type { Page } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"
  import Metadata from "$lib/components/Metadata.svelte"

  let { data }: { data: { page: Page } } = $props()
  let page = $derived(data.page)
</script>

<Metadata title={page.title} />

{#if page.content?.content}
  {@html renderBlockText(page.content.content)}
{/if}
