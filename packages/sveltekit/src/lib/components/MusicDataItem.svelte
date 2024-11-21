<script lang="ts">
  export let label: string
  export let value: string | string[] | undefined
</script>

{#if label && value}
  <div>
    - <span class="label">{label}</span>: <span class="value">{value}</span>
  </div>
{/if}

<style lang="scss">
  div {
    margin-bottom: var(--vertical-space);
  }
</style>
