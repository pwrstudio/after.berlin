<script lang="ts">
  import { onMount } from "svelte"
  export let width = 40
  export let text = ""
  const CHARACTER = "-"

  let tickerText = ""
  $: tickerText = text

  //   onMount(() => {
  //     setInterval(() => {
  //       tickerText = tickerText.slice(1) + tickerText.slice(0, 1)
  //     }, 200)
  //   })
</script>

<div class="ticker">
  <div class="horizontal-rule">
    {#each Array(width) as _}
      {CHARACTER}
    {/each}
  </div>
  <div class="text">
    {tickerText}
  </div>
  <div class="horizontal-rule">
    {#each Array(width) as _}
      {CHARACTER}
    {/each}
  </div>
</div>

<style>
  .ticker {
    margin-top: 1.2em;
    margin-bottom: 1.2em;
  }

  .text {
    font-style: italic;
  }

  .horizontal-rule {
    /* color: darkgrey; */
  }
</style>
