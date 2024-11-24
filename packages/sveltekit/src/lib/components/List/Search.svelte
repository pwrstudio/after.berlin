<script lang="ts">
  import { searchTerm, baseList, orderedList } from "."

  let term = ""

  $: term = $searchTerm

  const handleInput = () => {
    searchTerm.set(term)
  }
</script>

<div class="search">
  <input
    type="text"
    placeholder="Search"
    bind:value={term}
    on:input={handleInput}
  />

  {#if term}
    <button on:click={() => searchTerm.set("")}>clear</button>
    <div class="count">
      <span>{$orderedList.length}/{$baseList.length} shown</span>
    </div>
  {/if}
</div>

<style lang="scss">
  @import "../../styles/responsive.scss";

  .search {
    margin-top: 1.2em;
    margin-bottom: 2.4em;
    display: flex;

    input {
      font-family: var(--font-family);
      font-size: var(--font-size);
      border: 1px solid var(--color-secondary);
      padding: 1ch;
      margin-right: 0.5em;
      background: var(--white);
      outline: none;
      border-radius: 0;

      &:focus {
        border: 1px solid var(--color-primary);
        outline: none;
        color: var(--color-accent);
      }

      &::placeholder {
        color: var(--color-primary);
      }
    }

    button {
      font-family: var(--font-family);
      font-size: var(--font-size);
      border: 1px solid var(--color-primary);
      color: var(--color-primary);
      outline: none;
      padding: 0.5em;
      margin-right: 0.5em;
      cursor: pointer;
      background: var(--white);

      &:hover {
        background: var(--color-secondary);
      }

      @include screen-size("phone") {
        display: none;
      }
    }

    .count {
      font-family: var(--font-family);
      border: 1px solid var(--color-primary);
      outline: none;
      padding: 0.5em;
      margin-right: 0.5em;

      span {
        position: relative;
        top: 0.2em;
      }

      @include screen-size("phone") {
        display: none;
      }
    }
  }
</style>
