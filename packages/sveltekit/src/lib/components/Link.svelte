<script lang="ts">
  let { link }: { link: { link?: string; linkText?: string } } = $props()
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
