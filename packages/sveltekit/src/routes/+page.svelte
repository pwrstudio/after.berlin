<script lang="ts">
  import type { Frontpage, Event } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import EventComponent from "$lib/components/EventComponent.svelte"

  export let data: { frontpage: Frontpage; events: Event[] }
  const { frontpage, events } = data
</script>

<div>{@html renderBlockText(frontpage.byline?.content ?? [])}</div>

<HorizontalRule />

<!-- EVENTS -->
{#if events.length > 0}
  <div>
    {#each events as event}
      <EventComponent {event} />
    {/each}
  </div>

  <HorizontalRule />
{/if}

<div>
  <!-- PAGES -->
  <div class="pages">
    <ul>
      {#each frontpage.pageLinks.filter(page => page._type !== "musicLibrary") as page}
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
    <pre>{@html renderBlockText(frontpage.address?.content ?? [])}</pre>
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
