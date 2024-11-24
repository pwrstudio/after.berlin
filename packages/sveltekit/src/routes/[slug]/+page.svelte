<script lang="ts">
  import type { Page } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"
  import Metadata from "$lib/components/Metadata.svelte"

  export let data: { page: Page }
  const { page } = data
</script>

<Metadata title={page.title} />

{#if page.content?.content}
  {@html renderBlockText(page.content.content)}
{/if}
