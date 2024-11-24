<script lang="ts">
  export let link: { link?: string; linkText?: string }
</script>

<div class="link">
  <a href={link.link ?? ""} target="_blank" rel="noopener noreferrer">
    > {link.linkText ?? ""}
  </a>
</div>

<style lang="scss">
  .link {
    margin-bottom: var(--vertical-space);
  }
</style>
