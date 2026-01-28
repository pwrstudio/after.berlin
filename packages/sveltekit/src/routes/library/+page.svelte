<script lang="ts">
  import type { MusicLibrary, Music } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"
  import List from "$lib/components/List/List.svelte"
  import HorizonalRule from "$lib/components/HorizontalRule.svelte"
  import Search from "$lib/components/List/Search.svelte"
  import Metadata from "$lib/components/Metadata.svelte"

  let { data }: { data: { music: Music[]; page: MusicLibrary } } = $props()
  let music = $derived(data.music)
  let page = $derived(data.page)
</script>

<Metadata title="library" />

{#if page.content?.content}
  {@html renderBlockText(page.content.content)}
{/if}

<HorizonalRule extended={true} />

<Search />

<!-- MUSIC LIBRARY -->
<List itemList={music} />
