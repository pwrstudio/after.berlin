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
  <button
    class="header-button"
    class:active={$orderColumn === columnType}
    on:click={setOrderColumn}
  >
    {title}
    {#if $orderColumn === columnType}
      {#if $orderDirection === OrderDirection.Ascending}
        ↑
      {:else}
        ↓
      {/if}
    {/if}
  </button>
</div>

<style lang="scss">
  @import "../../styles/responsive.scss";

  .header-cell {
    text-align: left;
    user-select: none;
    color: var(--color-emphasis);

    .header-button {
      background: transparent;
      border: none;
      outline: 0;
      font-size: var(--font-size);
      font-family: var(--font-family);
      font-weight: normal;
      padding: 0;
      cursor: pointer;
      color: var(--color-primary);

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
      width: 20%;
      @include screen-size("phone") {
        width: 50%;
      }
    }

    &.year {
      width: 10%;
      @include screen-size("phone") {
        display: none;
      }
    }

    &.label {
      width: 20%;
      @include screen-size("phone") {
        display: none;
      }
    }

    &.genre {
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
