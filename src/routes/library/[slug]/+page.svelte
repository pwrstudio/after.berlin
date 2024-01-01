<script lang="ts">
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import { formatDate } from "$lib/modules/date.js"
  import { renderBlockText } from "$lib/modules/sanity"
  export let data
  const { page } = data
</script>

<h2>{page.title}</h2>

<HorizontalRule />

<div>
  {formatDate(page.date)}
</div>

<HorizontalRule />

... TODO

<style lang="scss">
  h2 {
    font-size: var(--font-size);
    font-weight: var(--font-weight);
  }
</style>
