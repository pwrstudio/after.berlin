<script lang="ts">
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import { formatDateTime } from "$lib/modules/date.js"
  import { renderBlockText } from "$lib/modules/sanity"
  export let data
  const { page } = data
</script>

<h2>{page.title}</h2>

<HorizontalRule />

<div>
  {formatDateTime(page.dateTime)}
</div>

<HorizontalRule />

<div>
  {@html renderBlockText(page.about.content)}
</div>

<style lang="scss">
  h2 {
    font-size: var(--font-size);
    font-weight: 200;
  }
</style>
