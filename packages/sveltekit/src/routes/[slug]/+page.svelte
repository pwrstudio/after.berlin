<script lang="ts">
  import type { Page } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"

  export let data: { page: Page }
  const { page } = data
</script>

{#if page.content?.content}
  {@html renderBlockText(page.content.content)}
{/if}
