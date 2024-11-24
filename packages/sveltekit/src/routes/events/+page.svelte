<script lang="ts">
  import type { Event } from "@sanity-types"
  import EventComponent from "$lib/components/EventComponent.svelte"
  import Metadata from "$lib/components/Metadata.svelte"

  export let data: { events: Event[] }
  const { events } = data
</script>

<Metadata title="before" />

<!-- EVENTS -->
{#each events as event}
  <EventComponent {event} />
{/each}
