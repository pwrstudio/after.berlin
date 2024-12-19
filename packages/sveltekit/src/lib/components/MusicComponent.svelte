<script lang="ts">
  import type { Music } from "@sanity-types"

  export let music: Music
</script>

<div class="music">
  <a
    href={"/library/" + music.slug?.current}
    class="title"
    data-sveltekit-preload-data
  >
    {music.title}
  </a>
</div>

<style lang="scss">
  .music {
    margin-bottom: var(--vertical-space);
  }

  .title {
    display: inline-block;
    margin-left: 2ch;
  }
</style>
