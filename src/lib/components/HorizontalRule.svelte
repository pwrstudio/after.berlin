<script lang="ts">
  export let width = 40
  const CHARACTER = "-"
</script>

<div class="horizontal-rule">
  {#each Array(width) as _}
    {CHARACTER}
  {/each}
</div>

<style>
  .horizontal-rule {
    margin-top: 0.6em;
    margin-bottom: 0.6em;
    /* color: orangered; */
    /* color: darkgrey; */
  }
</style>
