<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity"
  import List from "$lib/components/List/List.svelte"
  import HorizonalRule from "$lib/components/HorizontalRule.svelte"
  import Search from "$lib/components/List/Search.svelte"
  export let data
  const { music, page } = data
</script>

{#if page.content?.content}
  {@html renderBlockText(page.content.content)}
{/if}

<HorizonalRule />

<Search />

<!-- MUSIC LIBRARY -->
<List itemList={music} />
