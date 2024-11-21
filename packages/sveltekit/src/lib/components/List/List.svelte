<script lang="ts">
  import Item from "$lib/components/List/Item.svelte"
  import Header from "$lib/components/List/Header.svelte"
  import type { Music } from "@sanity-types"
  import { baseList, orderedList } from "."
  export let itemList: Music[] = []

  baseList.set(itemList)
</script>

<div class="list">
  <Header />
  {#if $orderedList.length === 0}
    <Item message="Nothing to show" />
  {:else}
    {#each $orderedList as item}
      <Item {item} />
    {/each}
  {/if}
</div>

<style>
  .list {
    border-spacing: 0 20px;
    width: 100%;
  }
</style>
