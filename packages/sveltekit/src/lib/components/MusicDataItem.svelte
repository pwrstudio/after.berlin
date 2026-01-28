<script lang="ts">
  import { arrayToString } from "$lib/modules/utils"

  let { label, value }: { label: string; value: string | string[] | undefined } =
    $props()
</script>

{#if label && value}
  <div>
    - <span class="label">{label}</span>:
    <span class="value">{arrayToString(value)}</span>
  </div>
{/if}

<style lang="scss">
  div {
    margin-bottom: var(--vertical-space);
  }
</style>
