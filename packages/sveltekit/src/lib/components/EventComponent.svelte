<script lang="ts">
  import type { Event } from "@sanity-types"
  import { formatDate } from "$lib/modules/date"

  export let event: Event
</script>

<div class="event">
  <div class="date-time">
    {formatDate(event.dateTime)}
  </div>
  <a
    href={"/events/" + event.slug?.current}
    class="title"
    data-sveltekit-preload-data
  >
    {event.title}
  </a>
</div>

<style lang="scss">
  .event {
    // text-decoration: underline;
    margin-bottom: var(--vertical-space);
  }

  .title {
    display: inline-block;
    margin-left: 2ch;
  }
</style>
