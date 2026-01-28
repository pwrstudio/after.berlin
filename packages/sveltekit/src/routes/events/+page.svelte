<script lang="ts">
  import type { Event } from "@sanity-types"
  import EventComponent from "$lib/components/EventComponent.svelte"
  import Metadata from "$lib/components/Metadata.svelte"

  let { data }: { data: { events: Event[] } } = $props()
  let events = $derived(data.events)
</script>

<Metadata title="before" />

<!-- EVENTS -->
{#each events as event}
  <EventComponent {event} />
{/each}
