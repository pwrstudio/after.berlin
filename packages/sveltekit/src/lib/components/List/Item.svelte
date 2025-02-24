<script lang="ts">
  import type { Music } from "@sanity-types"
  import { arrayToString } from "$lib/modules/utils"

  export let item: Music | undefined = undefined
  export let message: string = ""

  function getLink(item: Music | undefined) {
    return {
      url: `/library/${item?.slug?.current ?? ""}`,
      target: "",
    }
  }

  let link = getLink(item)
</script>

{#if item}
  <a href={link.url} target={link.target} class="row">
    <div class="cell title">{item.title ?? ""}</div>
    <div class="cell artist">{arrayToString(item.artist)}</div>
    <div class="cell year">{item.firstIssueYear ?? ""}</div>
    <div class="cell label">{item.label ?? ""}</div>
    <div class="cell genre">{arrayToString(item.tags)}</div>
  </a>
{:else}
  <div class="row">{message}</div>
{/if}

<style lang="scss">
  @import "../../styles/responsive.scss";

  .row {
    display: flex;
    text-decoration: none;
    color: inherit;
    padding-bottom: var(--double-vertical-space);
    padding-top: var(--double-vertical-space);
    border-top: 1px solid var(--color-secondary);

    &:last-child {
      border-bottom: 1px solid var(--color-secondary);
    }

    .cell {
      padding-right: 20px;
      height: 100%;

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
        padding-right: 0;
        width: 20%;
        @include screen-size("phone") {
          display: none;
        }
      }
    }
  }
</style>
