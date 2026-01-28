<script lang="ts">
  import type { Event } from "@sanity-types"
  import type { FrontpageResolved } from "$lib/types"
  import { renderBlockText } from "$lib/modules/sanity"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import EventComponent from "$lib/components/EventComponent.svelte"
  import Metadata from "$lib/components/Metadata.svelte"

  let { data }: { data: { frontpage: FrontpageResolved; events: Event[] } } =
    $props()
  let frontpage = $derived(data.frontpage)
  let events = $derived(data.events)
</script>

<Metadata />

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
    {#if frontpage.pageLinks}
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
    {/if}
  </div>

  <HorizontalRule />

  <!-- ADDRESS -->
  <div>
    <pre>{@html renderBlockText(frontpage.address?.content ?? [])}</pre>
  </div>
</div>

<style lang="scss">
  li {
    margin-bottom: var(--vertical-space);
  }
</style>
