<script lang="ts">
  import type { MusicLibrary, Music } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"
  import List from "$lib/components/List/List.svelte"
  import HorizonalRule from "$lib/components/HorizontalRule.svelte"
  import Search from "$lib/components/List/Search.svelte"
  import Metadata from "$lib/components/Metadata.svelte"

  export let data: { music: Music[]; page: MusicLibrary }
  const { music, page } = data
</script>

<Metadata title="library" />

{#if page.content?.content}
  {@html renderBlockText(page.content.content)}
{/if}

<HorizonalRule extended />

<Search />

<!-- MUSIC LIBRARY -->
<List itemList={music} />
