<script lang="ts">
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import Event from "$lib/components/Event.svelte"
  export let data
  const { frontpage, events } = data
  console.log(frontpage)
</script>

<div>{frontpage.byline}</div>

<HorizontalRule />

<!-- EVENTS -->
<div>
  {#each events as event}
    <Event {event} />
  {/each}
</div>

<HorizontalRule />

<div>
  <div class="pages">
    <ul>
      {#each frontpage.pageLinks as page}
        <li>
          {#if page._type === "eventList"}
            <a href="/events" data-sveltekit-preload-data>{page.title}</a>
          {:else}
            <a href={page.slug?.current} data-sveltekit-preload-data>
              {page.title}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</div>

<HorizontalRule />

<!-- ADDRESS -->
<div>
  <pre>{frontpage.address}</pre>
</div>

<style lang="scss">
  .all-events {
    margin-left: 30ch;
  }
</style>
