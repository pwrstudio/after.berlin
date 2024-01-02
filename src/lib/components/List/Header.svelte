<script lang="ts">
  import HeaderItem from "$lib/components/List/HeaderItem.svelte"
  import { columns } from "."
</script>

<div class="header-row">
  {#each columns as column}
    <HeaderItem title={column.title} columnType={column.columnType} />
  {/each}
</div>

<style lang="scss">
  .header-row {
    display: flex;
    padding-bottom: var(--vertical-space);
    border-bottom: 1px dashed var(--color-border);
  }
</style>
