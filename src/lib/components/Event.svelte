<script lang="ts">
  import { formatDate } from "$lib/modules/date"
  export let event: any
</script>

<div class="event">
  <div class="date-time">
    {formatDate(event.dateTime)}
  </div>
  <a
    href={"/events/" + event.slug?.current}
    class="title"
    data-sveltekit-preload-data
    >{event.title}
  </a>
</div>

<style lang="scss">
  .event {
    margin-bottom: 0.6em;
  }

  .title {
    display: inline-block;
    margin-left: 2ch;
  }
</style>
