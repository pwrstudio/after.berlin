<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity"
  export let data
  const { page } = data
</script>

{#if page.content?.content}
  <div>
    {@html renderBlockText(page.content.content)}
  </div>
{/if}
