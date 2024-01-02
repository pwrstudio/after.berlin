<script lang="ts">
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import Event from "$lib/components/Event.svelte"
  export let data
  const { frontpage, events } = data
</script>

<div>{frontpage.byline}</div>

<HorizontalRule />

<!-- EVENTS -->
{#if events.length > 0}
  <div>
    {#each events as event}
      <Event {event} />
    {/each}
  </div>

  <HorizontalRule />
{/if}

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

  <HorizontalRule />

  <!-- ADDRESS -->
  <div>
    <pre>{frontpage.address}</pre>
  </div>
</div>

<style lang="scss">
  .all-events {
    margin-left: 30ch;
  }

  li {
    margin-bottom: var(--vertical-space);
  }
</style>
