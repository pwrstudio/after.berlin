<script lang="ts">
  import { ColumnType, OrderDirection } from "$lib/enums"
  import { orderColumn, orderDirection, SORTABLE_COLUMNS } from "."
  export let title: string
  export let columnType: ColumnType

  const sortable = SORTABLE_COLUMNS.includes(columnType)

  const setOrderColumn = () => {
    if ($orderColumn === columnType) {
      orderDirection.set(
        $orderDirection === OrderDirection.Ascending
          ? OrderDirection.Descending
          : OrderDirection.Ascending
      )
    } else {
      orderColumn.set(columnType)
      orderDirection.set(OrderDirection.Descending)
    }
  }
</script>

<div class="header-cell {ColumnType[columnType].toLowerCase()}" class:sortable>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span class:active={$orderColumn === columnType} on:click={setOrderColumn}>
    {title}
    {#if $orderColumn === columnType}
      {#if $orderDirection === OrderDirection.Ascending}
        ↑
      {:else}
        ↓
      {/if}
    {/if}
  </span>
</div>

<style lang="scss">
  @import "../../styles/responsive.scss";

  .header-cell {
    text-align: left;
    user-select: none;
    color: var(--color-emphasis);

    span {
      cursor: pointer;

      &.active {
        background: var(--color-secondary);
      }

      &:hover {
        background: var(--color-secondary);
      }
    }

    &.title {
      width: 30%;

      @include screen-size("phone") {
        width: 50%;
      }
    }

    &.artist {
      width: 30%;
      @include screen-size("phone") {
        width: 50%;
      }
    }

    &.label {
      width: 20%;
      @include screen-size("phone") {
        display: none;
      }
    }

    &.cataloguenumber {
      width: 20%;
      @include screen-size("phone") {
        display: none;
      }
    }

    &.sortable {
      pointer-events: all;
      cursor: pointer;
    }
  }
</style>
