<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import Ticker from "$lib//components/Ticker.svelte"
  export let data
  const { about, byline, events } = data
  const width = 40
  const text = byline.byline

  function formatDateTime(dateTime: string) {
    const formattedDateTime = dateTime.substring(0, 10)
    return formattedDateTime
  }
  // console.log("about", about)
  // console.log("byline", byline)
  // console.log("events", events)
</script>

<main>
  <!-- TITLE -->
  <h1>after</h1>

  <!-- BYLINE -->
  <!-- <Ticker {width} {text} /> -->

  <HorizontalRule {width} />

  <div>
    {byline.byline}
  </div>

  <HorizontalRule {width} />

  <!-- ABOUT TEXT -->
  <div>
    {@html renderBlockText(about.about.content)}
  </div>

  <HorizontalRule {width} />

  <!-- EVENTS -->
  <div>
    {#each events as event}
      <div class="event">
        <div class="date-time">
          {formatDateTime(event.dateTime)}
        </div>
        <div class="title">
          <pre>  {event.title}</pre>
        </div>
      </div>
    {/each}
  </div>

  <HorizontalRule {width} />

  <!-- ADDRESS -->
  <div>
    <pre>{about.address}</pre>
  </div>
</main>

<style>
  main {
    margin-top: 1.2em;
    width: 41ch;
    margin-left: 1ch;
    /* margin-left: auto;
    margin-right: auto; */
    font-size: 22px;
    line-height: 1.2em;
    margin-bottom: 1.2em;
  }

  .event {
    margin-bottom: 0.6em;
  }

  h1 {
    font-weight: 200;
    font-size: 22px;
    margin-top: 0;
    margin-bottom: 0;
    display: inline-block;
    background: rgba(160, 160, 160, 0.3);
    margin-right: auto;
    margin-left: auto;
  }
</style>
