<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity"
  export let data
  const { about, byline, events } = data
  console.log("about", about)
  console.log("byline", byline)
  console.log("events", events)
</script>

<div>
  {@html renderBlockText(about.about.content)}
</div>

<div>
  {about.address}
</div>

<div>
  {byline.byline}
</div>

<div>
  {#each events as event}
    <div>
      {event.title}
    </div>
  {/each}
</div>
