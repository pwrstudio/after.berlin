<script lang="ts">
  export let link: any
</script>

<div class="link">
  <a href={link.link} target="_blank" rel="noopener noreferrer">
    > {link.linkText}
  </a>
</div>

<style lang="scss">
  .link {
    margin-bottom: var(--vertical-space);
  }
</style>
