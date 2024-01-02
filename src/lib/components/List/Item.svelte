<script lang="ts">
  import type { ItemType } from "$lib/types"
  export let item: ItemType

  function getLink(item: ItemType) {
    return {
      url: `/library/${item.slug?.current ?? ""}`,
      target: "",
    }

    // if (item.type === "article") {
    //   return {
    //     url: item.slug?.current ?? "",
    //     target: "",
    //   }
    // } else if (item.type === "link") {
    //   return {
    //     url: item.link ?? "",
    //     target: "_blank",
    //   }
    // } else if (item.type === "file") {
    //   return {
    //     url: item.fileUrl ?? "",
    //     target: "_blank",
    //   }
    // } else {
    //   return {
    //     url: "",
    //     target: "",
    //   }
    // }
  }

  let link = getLink(item)
</script>

<a href={link.url} target={link.target} class="row">
  <div class="cell title">{item.title}</div>
  <div class="cell artist">{item.interpreter ?? ""}</div>
  <div class="cell date">{item.date ?? ""}</div>
  <div class="cell label">{item.label ?? ""}</div>
  <div class="cell catalogue-number">{item.catalogueNumber ?? ""}</div>
</a>

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

      &.date {
        width: 20%;
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

      &.catalogue-number {
        padding-right: 0;
        width: 10%;
        @include screen-size("phone") {
          display: none;
        }
      }
    }
  }
</style>
